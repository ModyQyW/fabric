import type { Linter } from 'eslint';
import env from './env';
import globals from './globals';
import rules from './rules';
import settings from './settings';

const config: Linter.Config = {
  root: true,
  parser: 'svelte-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte'],
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: ['regexp', 'prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@ota-meshi/svelte/recommended',
    'plugin:regexp/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
  ],
  env: {
    ...env,
  },
  globals: {
    ...globals,
  },
  rules: {
    ...rules.vanillaTypescript,
    ...rules.svelteTypescript,
    'prettier/prettier': 'warn',
  },
  settings: {
    ...settings,
  },
};

export default config;
