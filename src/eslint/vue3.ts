import env from './env';
import globals from './globals';
import rules from './rules';
import settings from './settings';
import type { Linter } from 'eslint';

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
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue-scoped-css/vue3-recommended',
  ],
  env: {
    ...env,
    'vue/setup-compiler-macros': true,
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
