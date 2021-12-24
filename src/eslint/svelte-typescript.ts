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
  plugins: ['regexp'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@ota-meshi/svelte/recommended',
    'plugin:regexp/recommended',
    'plugin:eslint-comments/recommended',
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
  },
  settings: {
    ...settings,
  },
};

export default config;
