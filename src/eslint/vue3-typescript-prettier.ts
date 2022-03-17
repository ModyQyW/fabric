import env from './env';
import globals from './globals';
import rules from './rules';
import settings from './settings';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    warnOnUnsupportedTypeScriptVersion: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:eslint-comments/recommended',
    'plugin:regexp/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    ...env,
    'vue/setup-compiler-macros': true,
  },
  globals: {
    ...globals,
  },
  rules: {
    ...rules.vanillaTypescript,
    ...rules.vue3Typescript,
    ...rules.prettier,
  },
  overrides: [
    {
      files: ['shims-jsx.d.ts', 'shims-tsx.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  settings: {
    ...settings.typescript,
  },
};

export default config;
