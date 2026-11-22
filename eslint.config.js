// ESLint (flat config) — replaces the lint rules CRA used to run inside react-scripts:
// rules of hooks, exhaustive deps and unused variables. Run with `npm run lint`.
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['build', 'node_modules'] },
  {
    files: ['src/**/*.{js,jsx}', 'coming-soon/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      ...js.configs.recommended.rules,
      // Capitalised names are React components used in JSX.
      'no-unused-vars': ['warn', { varsIgnorePattern: '^[A-Z_]' }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true, allowExportNames: ['webpUrl'] }],
    },
  },
  {
    files: ['scripts/**/*.js', '*.config.js'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: globals.node },
    rules: js.configs.recommended.rules,
  },
];
