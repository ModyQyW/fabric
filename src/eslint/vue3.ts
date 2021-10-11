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
  plugins: ['regexp'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb-base',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/vue3-recommended',
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
    ...rules.vanilla,
    ...rules.vue3,
  },
  settings: {
    ...settings,
  },
};

export default config;
