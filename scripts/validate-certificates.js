import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseCertificateRegistry } from '../src/data/certificates.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const records = parseCertificateRegistry(JSON.parse(fs.readFileSync(path.join(root, 'public/certificates/registry.json'), 'utf8')));
for (const record of records) {
  if (record.fileUrl && !fs.statSync(path.join(root, 'public', record.fileUrl)).isFile()) {
    throw new Error('Missing certificate file: ' + record.id);
  }
}
console.log('validate-certificates: ' + records.length + ' publication-approved records; schema and files valid');
