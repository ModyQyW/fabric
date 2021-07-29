const commonEnv = require('./env/common');
const commonGlobals = require('./globals/common');
const commonRules = require('./rules/common');
const vue3Rules = require('./rules/vue3');
const commonSettings = require('./settings/common');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:unicorn/recommended',
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
    ...commonSettings,
  },
};
