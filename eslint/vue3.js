const commonRules = require('./rules/common');
const vue3Rules = require('./rules/vue3');
const vue3Settings = require('./settings/vue3');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:unicorn/recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'prettier',
    'prettier/prettier',
    'prettier/unicorn',
    'prettier/vue',
  ],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    mocha: true,
    node: true,
  },
  globals: {
    plus: 'readonly',
    uni: 'readonly',
    weex: 'readonly',
  },
  rules: {
    ...commonRules,
    ...vue3Rules,
  },
  settings: {
    ...vue3Settings,
  },
};
