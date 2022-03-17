import env from './env';
import globals from './globals';
import rules from './rules';
import settings from './settings';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  root: true,
  parser: 'svelte-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:regexp/recommended',
    'plugin:@ota-meshi/svelte/recommended',
  ],
  env: {
    ...env,
  },
  globals: {
    ...globals,
  },
  rules: {
    ...rules.vanilla,
    ...rules.svelte,
  },
  settings: {
    ...settings.javascript,
  },
};

export default config;
