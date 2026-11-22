#!/usr/bin/env node
/**
 * Post-build: one static HTML file per route, with that route's SEO / social tags.
 *
 * Why: GitHub Pages only knows real files. Without this, a direct visit to /our-story is
 * answered by 404.html with HTTP 404 (then a JS redirect). Google may skip rendering
 * non-200 pages, and WhatsApp / Telegram / Facebook (which do not run JavaScript) see no
 * title, description or image. With build/our-story.html the same URL returns 200 and the
 * right tags; the React app boots exactly as before.
 *
 * Source of truth: the <Seo titleKey="…" descriptionKey="…" path="…" /> props in
 * src/pages/*.jsx, resolved with the default language (Kyrgyz). The age-band pages
 * (/scope-and-sequence/:band) are built from src/data/ageTopics.js like the page does.
 *
 * Usage: node scripts/generate-route-html.js [outDir=build]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.resolve(ROOT, process.argv[2] || 'build');
const SITE_URL = 'https://moraled.com';
const SITE_NAME = 'MoralEd';
const LANG = 'kg'; // default site language (i18n fallbackLng)

const t = (() => {
  const dict = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/locales', LANG, 'translation.json'), 'utf8'));
  return (key, vars = {}) => {
    const value = key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), dict);
    if (typeof value !== 'string') throw new Error(`Missing translation "${key}" (${LANG})`);
    return value.replace(/\{\{(\w+)\}\}/g, (_, v) => vars[v] ?? '');
  };
})();

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// 1) Static pages: read the <Seo …/> props straight from the page components.
const routes = [];
const pagesDir = path.join(ROOT, 'src/pages');
for (const file of fs.readdirSync(pagesDir).filter((f) => f.endsWith('.jsx'))) {
  const src = fs.readFileSync(path.join(pagesDir, file), 'utf8');
  for (const [, props] of src.matchAll(/<Seo\b([\s\S]*?)\/>/g)) {
    const prop = (name) => (props.match(new RegExp(`\\b${name}="([^"]*)"`)) || [])[1];
    const route = prop('path');
    if (!route || props.includes('noIndex')) continue; // dynamic or not-indexed pages
    routes.push({ route, title: t(prop('titleKey')), description: t(prop('descriptionKey')), file });
  }
}

// 2) Age-band pages — same strings as src/pages/ScopeSequenceAge.jsx.
const { AGE_PAGES } = await import(path.join(ROOT, 'src/data/ageTopics.js'));
for (const [slug, page] of Object.entries(AGE_PAGES)) {
  const range = t(`scopeSequence.band_${page.band}_range`);
  routes.push({
    route: `/scope-and-sequence/${slug}`,
    title: `${t(`scopeSequence.band_${page.band}_title`)} (${range}) – ${t('scopeSequence.title')}`,
    description: t('ageDetail.seo_description', { range }),
    file: 'ScopeSequenceAge.jsx',
  });
}

// 3) Write the files.
const template = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
const setTag = (html, attr, name, value) => {
  const re = new RegExp(`(<meta data-seo-static ${attr}="${name}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`index.html is missing <meta ${attr}="${name}">`);
  return html.replace(re, `$1${escapeHtml(value)}$2`);
};

const render = ({ route, title, description }) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${route}`;
  let html = template.replace(/<title data-seo-static>[^<]*<\/title>/, `<title data-seo-static>${escapeHtml(fullTitle)}</title>`);
  html = html.replace(/(<link data-seo-static rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = setTag(html, 'name', 'description', description);
  html = setTag(html, 'property', 'og:title', fullTitle);
  html = setTag(html, 'property', 'og:description', description);
  html = setTag(html, 'property', 'og:url', url);
  html = setTag(html, 'name', 'twitter:title', fullTitle);
  html = setTag(html, 'name', 'twitter:description', description);
  return html;
};

const all = routes.map((r) => r.route);
const written = [];
for (const r of routes.sort((a, b) => a.route.localeCompare(b.route))) {
  const html = render(r);
  const targets = r.route === '/' ? ['index.html'] : [`${r.route.slice(1)}.html`];
  // A route that also has child routes is a folder too: serve it from folder/index.html as well.
  if (r.route !== '/' && all.some((other) => other.startsWith(`${r.route}/`))) targets.push(`${r.route.slice(1)}/index.html`);
  for (const target of targets) {
    const dest = path.join(OUT, target);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, html);
    written.push(target);
  }
}
console.log(`generate-route-html: ${routes.length} routes → ${written.length} files in ${path.relative(ROOT, OUT) || '.'}`);
