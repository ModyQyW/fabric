const commonRules = require('./rules/common');
const vue2Rules = require('./rules/vue2');
const vue2Settings = require('./settings/vue2');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb-base',
    'plugin:vue/recommended',
    'prettier',
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
    ...vue2Rules,
  },
  settings: vue2Settings,
};
