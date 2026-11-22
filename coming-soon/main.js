import '../src/styles/tokens.css';
import '../src/index.css';
import './coming-soon.css';
import { STRINGS } from './strings.js';

// Same storage key as the full site (i18next), so a visitor's language carries over at launch.
const KEY = 'i18nextLng';
const htmlLang = (lang) => (lang === 'kg' ? 'ky' : lang); // 'kg' is the app code; Kyrgyz is 'ky'

// School year: September (0) … May (8). In summer show September's value.
function monthIndex(date = new Date()) {
  const m = date.getMonth(); // 0 = January
  if (m >= 8) return m - 8;
  if (m <= 4) return m + 4;
  return 0;
}

function renderValues(s) {
  const items = s.values.map((v) => `<li>${v}</li>`).join('');
  // First list is read by screen readers; the copy only makes the loop seamless.
  document.querySelectorAll('[data-values]').forEach((ul) => {
    ul.innerHTML = items;
  });
}

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
  const i = monthIndex();
  document.querySelectorAll('[data-month-value]').forEach((el) => {
    el.textContent = s.values[i];
  });
  document.querySelectorAll('[data-month-name]').forEach((el) => {
    el.textContent = s.months[i];
  });
  renderValues(s);
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

// Entrance animation starts once the page (and fonts) are ready — no flash of moving text.
const ready = () => document.body.classList.add('is-ready');
if (document.fonts && document.fonts.ready) document.fonts.ready.then(ready, ready);
else ready();
setTimeout(ready, 1200);
