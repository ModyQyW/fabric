require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      parser: 'svelte-eslint-parser',
    },
  ],
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      javascript: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
      typescript: '@typescript-eslint/parser',
    },
    extraFileExtensions: ['.svelte'],
  },
  extends: ['plugin:svelte/recommended', 'plugin:prettier/recommended'],
};
