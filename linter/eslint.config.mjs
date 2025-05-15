import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly', 
        error: 'readonly',// 👈 necesario para evitar el error de 'exports'
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_', // 👈 ignora argumentos como `_error`
        },
      ],
      'no-var': 'error',
      'max-len': ['error', { code: 150 }],
      'quotes': ['error', 'single'],
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
    },
  },
];
