import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // No usar variables sin utilizar
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],

      // No usar var
      'no-var': 'error',

      // Máximo 150 caracteres por línea
      'max-len': ['error', { code: 150 }],

      // Comillas simples
      'quotes': ['error', 'single'],

      // No usar eval
      'no-eval': 'error',

      // No declarar varias variables en una línea
      'one-var': ['error', 'never'],

      // No usar leading commas
      'comma-style': ['error', 'last'],

      // Variables mínimo de 3 caracteres
      'id-length': ['error', { min: 3 }],

      // PascalCase para clases
      'new-cap': ['error', { newIsCap: true }],

      // No usar importaciones globales (import * as ...)
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ImportDeclaration[specifiers.0.type=\'ImportNamespaceSpecifier\']',
          message: 'No se permiten importaciones globales (import * as ...)',
        },
      ],

      // Importaciones deben ir primero
      'import/first': 'error',
    },
  },
];
