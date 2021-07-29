const commonEnv = require('./env/common');
const commonGlobals = require('./globals/common');
const commonRules = require('./rules/common');
const vue2Rules = require('./rules/vue2');
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
    'plugin:vue/recommended',
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
    ...vue2Rules,
  },
  settings: {
    ...commonSettings,
  },
};
