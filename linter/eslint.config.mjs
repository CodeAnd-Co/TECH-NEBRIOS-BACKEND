// Importa la configuración recomendada de ESLint para JavaScript
import js from '@eslint/js';
// Importa el plugin de ESLint para reglas relacionadas con importaciones
import importPlugin from 'eslint-plugin-import';

export default [
  // Configuración recomendada básica
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        // Node.js
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',

        // Jest (para pruebas)
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },

    plugins: {
      import: importPlugin,
    },

    rules: {
      'no-var': 'error',
      'max-len': ['error', { code: 200 }],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-eval': 'error',
      'one-var': ['error', 'never'],
      'comma-style': ['error', 'last'],
      'id-length': ['error', { min: 2 }],
      'new-cap': ['error', { newIsCap: true }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ImportDeclaration[specifiers.0.type="ImportNamespaceSpecifier"]',
          message: 'No se permiten importaciones globales (import * as ...)',
        },
      ],
      'import/first': 'error',
      'no-unused-vars': 'off',
    },
  },
];
