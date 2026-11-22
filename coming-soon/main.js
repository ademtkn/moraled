import '../src/styles/tokens.css';
import '../src/index.css';
import './coming-soon.css';
import { STRINGS } from './strings.js';

// Same storage key as the full site (i18next), so a visitor's language carries over at launch.
const KEY = 'i18nextLng';
const htmlLang = (lang) => (lang === 'kg' ? 'ky' : lang); // 'kg' is the app code; Kyrgyz is 'ky'

function apply(lang) {
  const s = STRINGS[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = s[el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    el.setAttribute('aria-label', s[el.dataset.i18nAria]);
  });
  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
  });
  document.documentElement.lang = htmlLang(lang);
  document.title = s.metaTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content', s.lead);
}

let lang = 'kg';
try {
  const saved = localStorage.getItem(KEY);
  if (saved && STRINGS[saved]) lang = saved;
} catch {
  // storage unavailable (private mode): stay on Kyrgyz
}
apply(lang);

document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => {
    lang = btn.dataset.lang;
    try {
      localStorage.setItem(KEY, lang);
    } catch {
      // ignore
    }
    apply(lang);
  });
});

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});
