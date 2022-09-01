import '@rushstack/eslint-patch/modern-module-resolution';
import type * as ESLint from 'eslint';

export const config: ESLint.Linter.Config = {
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: {
          js: '@babel/eslint-parser',
          jsx: '@babel/eslint-parser',
          ts: '@typescript-eslint/parser',
          tsx: '@typescript-eslint/parser',
        },
        extraFileExtensions: ['.svelte'],
      },
    },
  ],
  extends: ['plugin:svelte/recommended', 'plugin:svelte/prettier', 'plugin:prettier/recommended'],
};

export default config;
