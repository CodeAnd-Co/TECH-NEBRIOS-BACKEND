// Importa la configuración recomendada de ESLint para JavaScript
import js from '@eslint/js';
// Importa el plugin de ESLint para reglas relacionadas con importaciones
import importPlugin from 'eslint-plugin-import';

// Exporta una configuración de ESLint como un array (usando configuración extendida)
export default [
  // Aplica la configuración recomendada de ESLint
  js.configs.recommended,
  {
    // Opciones de lenguaje
    languageOptions: {
      ecmaVersion: 2022, // Versión de ECMAScript que se usará (ES13 / ES2022)
      sourceType: 'commonjs', // Define que el tipo de módulo es CommonJS
      globals: {
        // Define variables globales como solo lectura (para evitar errores por redefinirlas)
        require: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    // Plugins que se usarán (en este caso, el de importación)
    plugins: {
      import: importPlugin,
    },
    // Reglas personalizadas de ESLint
    rules: {
      'no-var': 'error', // Prohíbe el uso de `var`, se prefiere `let` o `const`
      'max-len': ['error', { code: 200 }], // Máximo de 200 caracteres por línea
      'quotes': ['error', 'single'], // Obliga al uso de comillas simples
      'no-eval': 'error', // Prohíbe el uso de `eval` por seguridad
      'one-var': ['error', 'never'], // No permite declarar múltiples variables con una sola declaración `var`/`let`/`const`
      'comma-style': ['error', 'last'], // Comas deben colocarse al final de la línea
      'id-length': ['error', { min: 2 }], // Los identificadores deben tener al menos 2 caracteres
      'new-cap': ['error', { newIsCap: true }], // Fuerza que los constructores (usados con `new`) empiecen con mayúscula
      'no-restricted-syntax': [
        'error',
        {
          // Prohíbe las importaciones del tipo: `import * as algo from '...'`
          selector: 'ImportDeclaration[specifiers.0.type="ImportNamespaceSpecifier"]',
          message: 'No se permiten importaciones globales (import * as ...)',
        },
      ],
      'import/first': 'error', // Obliga a que todas las importaciones estén al principio del archivo

      // Desactiva la regla de no usar variables sin utilizar (útil si hay muchas variables auxiliares en desarrollo)
      'no-unused-vars': 'off',
    },
  },
];
