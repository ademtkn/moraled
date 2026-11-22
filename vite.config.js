import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // `import Logo from './logo.svg?react'` → inline React component (keeps the SVG's class names,
    // which Footer.css recolours for the white logo variant).
    svgr(),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
  },
  build: {
    // `npm run deploy` publishes this folder (gh-pages -d build), same as the old CRA setup.
    outDir: 'build',
    // Roughly what CRA's browserslist supported: school computers and older phones
    // (iOS 14+, Chrome/Edge 88+, Firefox 78+). Vite's default targets only ~2022+ browsers.
    // Keep Chrome at 88+: below that Lightning CSS adds :-webkit-any() fallbacks for :is(),
    // which carry different specificity and broke the mobile scope table.
    target: ['es2020', 'chrome88', 'edge88', 'firefox78', 'safari14'],
    // CSS gets browser targets only: 'es2020' maps to an older Chrome for Lightning CSS.
    cssTarget: ['chrome88', 'edge88', 'firefox78', 'safari14'],
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              // Core libraries every page needs. They rarely change, so returning visitors keep
              // them cached across deploys. Page-only libraries (react-slick, @emailjs/browser)
              // deliberately stay in their page chunks.
              name: 'vendor',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom|cookie|set-cookie-parser|react-helmet-async|invariant|react-fast-compare|shallowequal|i18next|react-i18next|i18next-browser-languagedetector|html-parse-stringify|void-elements|aos|lodash\.throttle|lodash\.debounce|classlist-polyfill)[\\/]/,
            },
          ],
        },
      },
    },
  },
});
