// Only publication-approved information belongs in the public registry.
// Schema, publication steps and access limitations: CERTIFICATES.md.
export const CERTIFICATE_DESIGNS = [
  { id: 'partner-school', image: '/images/certificates/partner-school.png', titleKey: 'certificate.design_partner' },
  { id: 'school-of-character', image: '/images/certificates/school-of-character.png', titleKey: 'certificate.design_character' },
  { id: 'distinguished-school', image: '/images/certificates/distinguished-school.png', titleKey: 'certificate.design_distinguished' },
];

export const normaliseCertificateId = (value) => String(value ?? '').trim().toUpperCase();
export const isCertificateId = (value) => typeof value === 'string' && /^[A-Z0-9_-]{6,64}$/.test(value);

function isDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + 'T00:00:00Z');
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function isCertificateFileUrl(value) {
  return typeof value === 'string'
    && /^\/certificates\/documents\/[A-Za-z0-9_/-]+\.(pdf|png|jpe?g|webp)$/i.test(value)
    && !value.includes('..') && !value.includes('//');
}

export function parseCertificateRegistry(data) {
  if (data?.version !== 1 || !Array.isArray(data.certificates)) throw new Error('Invalid certificate registry');
  const ids = new Set();
  for (const record of data.certificates) {
    if (!record || !isCertificateId(record.id) || ids.has(record.id)) throw new Error('Invalid or duplicate certificate ID');
    ids.add(record.id);
    if (!['school', 'teacher', 'student'].includes(record.recipientType)
      || typeof record.publicRecipientName !== 'string' || !record.publicRecipientName.trim()
      || (record.publicOrganisation != null && typeof record.publicOrganisation !== 'string')
      || !['kg', 'ru', 'en'].every((lang) => typeof record.title?.[lang] === 'string' && record.title[lang].trim())
      || !isDate(record.issuedOn)
      || (record.expiresOn !== null && (!isDate(record.expiresOn) || record.expiresOn < record.issuedOn))
      || !['active', 'revoked'].includes(record.status)
      || (record.fileUrl !== null && !isCertificateFileUrl(record.fileUrl))) {
      throw new Error('Invalid certificate record: ' + record.id);
    }
    const allowed = ['id', 'recipientType', 'publicRecipientName', 'publicOrganisation', 'title', 'issuedOn', 'expiresOn', 'status', 'fileUrl'];
    if (Object.keys(record).some((key) => !allowed.includes(key))) throw new Error('Unexpected certificate field: ' + record.id);
  }
  return data.certificates;
}

export function certificateStatus(record, now = new Date()) {
  if (record.status === 'revoked') return 'revoked';
  // Dates are inclusive and follow the issuer's Bishkek calendar day.
  const parts = new Intl.DateTimeFormat('en', {
    timeZone: 'Asia/Bishkek', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const part = (type) => parts.find((entry) => entry.type === type).value;
  const today = [part('year'), part('month'), part('day')].join('-');
  if (record.issuedOn > today) return 'scheduled';
  if (record.expiresOn && record.expiresOn < today) return 'expired';
  return 'active';
}
