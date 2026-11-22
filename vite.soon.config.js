// "Under construction" build — the ONLY thing published while the full site is in progress.
//   npm run dev:soon      → http://localhost:3001
//   npm run build:soon    → build/ (standalone: none of the full site's code, pages or texts)
//   npm run deploy        → build:soon + publish build/ to the gh-pages branch
// The full site still builds with `npm run build` (vite.config.js) and launches with `npm run deploy:full`.
import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, 'build');

// Only these files from public/ are published (CNAME keeps the moraled.com custom domain).
const PUBLIC_FILES = ['CNAME', 'favicon.svg', 'icon.svg', 'og-image.jpg'];

function comingSoonFiles() {
  let outDir = OUT; // follows --outDir when building elsewhere (e.g. a scratch folder)
  return {
    name: 'moraled-coming-soon-files',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      for (const file of PUBLIC_FILES) fs.copyFileSync(path.join(ROOT, 'public', file), path.join(outDir, file));
      fs.writeFileSync(path.join(outDir, 'robots.txt'), 'User-agent: *\nDisallow:\n');
      // GitHub Pages answers every unknown URL (e.g. /our-story) with 404.html → show the same page.
      fs.copyFileSync(path.join(outDir, 'index.html'), path.join(outDir, '404.html'));
    },
  };
}

export default defineConfig(({ command }) => ({
  root: path.join(ROOT, 'coming-soon'),
  base: '/',
  // Dev server needs favicon etc.; the production build copies only PUBLIC_FILES.
  publicDir: command === 'serve' ? path.join(ROOT, 'public') : false,
  plugins: [comingSoonFiles()],
  server: { port: 3001 },
  preview: { port: 4174 },
  build: {
    outDir: OUT,
    emptyOutDir: true,
    target: ['es2020', 'chrome88', 'edge88', 'firefox78', 'safari14'],
    cssTarget: ['chrome88', 'edge88', 'firefox78', 'safari14'],
  },
}));
