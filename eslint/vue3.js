const commonEnv = require('./env/common');
const commonGlobals = require('./globals/common');
const commonRules = require('./rules/common');
const vue3Rules = require('./rules/vue3');
const vue3Settings = require('./settings/vue3');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  extends: [
    // 'plugin:unicorn/recommended',
    'airbnb-base',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  env: {
    ...commonEnv,
  },
  globals: {
    ...commonGlobals,
  },
  rules: {
    ...commonRules,
    ...vue3Rules,
  },
  settings: {
    ...vue3Settings,
  },
};
