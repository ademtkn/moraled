import test from 'node:test';
import assert from 'node:assert/strict';
import { certificateStatus, isCertificateFileUrl, isCertificateId, normaliseCertificateId, parseCertificateRegistry } from '../src/data/certificates.js';

// Isolated fixtures, never written to the public registry.
const record = {
  id: 'TEST-2026-ABCDEF', recipientType: 'school', publicRecipientName: 'Test school',
  title: { kg: 'Сыноо', ru: 'Тест', en: 'Test' },
  issuedOn: '2026-09-01', expiresOn: '2026-11-22', status: 'active', fileUrl: null,
};
const registry = (...records) => ({ version: 1, certificates: records });

test('lookup normalises case and outer whitespace without changing identifiers', () => {
  assert.equal(normaliseCertificateId(' test-2026-abcdef '), record.id);
  assert.equal(isCertificateId(record.id), true);
  for (const id of [123456, null, '<script>', '../file', 'ABC', 'A'.repeat(65)]) assert.equal(isCertificateId(id), false);
});
test('empty registry is allowed; duplicate IDs and unsupported schema are rejected', () => {
  assert.deepEqual(parseCertificateRegistry(registry()), []);
  assert.equal(parseCertificateRegistry(registry(record)).length, 1);
  assert.throws(() => parseCertificateRegistry(registry(record, record)));
  assert.throws(() => parseCertificateRegistry({ version: 2, certificates: [] }));
});
test('invalid dates, missing translations and unintended private fields are rejected', () => {
  for (const patch of [
    { id: 123456 }, { issuedOn: '2026-02-30' }, { expiresOn: '2026-01-01' }, { expiresOn: undefined },
    { recipientType: 'other' }, { title: { en: 'Only English' } }, { email: 'fixture@example.invalid' },
  ]) assert.throws(() => parseCertificateRegistry(registry({ ...record, ...patch })));
});
test('only local certificate document URLs are allowed', () => {
  assert.equal(isCertificateFileUrl('/certificates/documents/test.pdf'), true);
  for (const url of ['https://other.invalid/test.pdf', 'javascript:alert(1)', '/certificates/documents/../test.pdf', '//evil.invalid/test.pdf', '/certificates/documents/test.html']) {
    assert.equal(isCertificateFileUrl(url), false);
    assert.throws(() => parseCertificateRegistry(registry({ ...record, fileUrl: url })));
  }
});
test('expiry includes the last Bishkek day and crosses midnight at UTC+6', () => {
  assert.equal(certificateStatus(record, new Date('2026-11-22T17:59:59Z')), 'active');
  assert.equal(certificateStatus(record, new Date('2026-11-22T18:00:00Z')), 'expired');
});
test('revocation and future issue dates cannot appear active; no expiry is invented', () => {
  assert.equal(certificateStatus({ ...record, status: 'revoked' }, new Date('2026-11-01T00:00:00Z')), 'revoked');
  assert.equal(certificateStatus(record, new Date('2026-08-31T17:59:59Z')), 'scheduled');
  assert.equal(certificateStatus({ ...record, expiresOn: null }, new Date('2035-01-01T00:00:00Z')), 'active');
});
