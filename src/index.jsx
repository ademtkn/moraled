import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tokens.css';
import './index.css';
import App from './App';
import './i18n';
import './responsive-fixes.css';
import './polish.css';
import './styles/inner.css';

// After a new deploy the old page chunks are gone from GitHub Pages. If an open tab
// asks for one, reload once to pick up the new build (guarded against reload loops).
window.addEventListener('vite:preloadError', (event) => {
  const KEY = 'moraled:chunk-reload';
  const last = Number(sessionStorage.getItem(KEY) || 0);
  if (Date.now() - last > 10000) {
    sessionStorage.setItem(KEY, String(Date.now()));
    event.preventDefault();
    window.location.reload();
  }
});

// index.html carries static SEO/social tags for crawlers that do not run JavaScript.
// The app renders its own per-page tags (components/Seo.jsx), so drop the static copies.
// The static <title> stays until the first <Seo> mounts (it removes it), so there is never
// a moment without a title — e.g. while a code-split page is still downloading.
document.querySelectorAll('[data-seo-static]:not(title)').forEach((el) => el.remove());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
