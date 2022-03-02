import type { Linter } from 'eslint';
import env from './env';
import globals from './globals';
import rules from './rules';
import settings from './settings';

const config: Linter.Config = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/recommended',
    'plugin:vue-scoped-css/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    ...env,
  },
  globals: {
    ...globals,
  },
  rules: {
    ...rules.vanilla,
    ...rules.vue2,
    ...rules.prettier,
  },
  settings: {
    ...settings,
  },
};

export default config;
