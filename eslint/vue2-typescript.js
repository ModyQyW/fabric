const commonEnv = require('./env/common');
const commonGlobals = require('./globals/common');
const commonTypescriptRules = require('./rules/common-typescript');
const vue2TypescriptRules = require('./rules/vue2-typescript');
const commonSettings = require('./settings/common');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: ['prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb-typescript/base',
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
    ...commonTypescriptRules,
    ...vue2TypescriptRules,
  },
  overrides: [
    {
      files: ['shims-tsx.d.ts'],
      rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
  settings: {
    ...commonSettings,
  },
};
