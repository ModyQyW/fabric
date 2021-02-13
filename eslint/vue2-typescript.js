const commonEnv = require('./env/common');
const commonGlobals = require('./globals/common');
const commonTypescriptRules = require('./rules/common-typescript');
const vue2TypescriptRules = require('./rules/vue2-typescript');
const vue2TypescriptSettings = require('./rules/vue2-typescript');

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
    'plugin:vue/recommended',
    'prettier',
    'prettier/prettier',
    'prettier/unicorn',
    'prettier/@typescript-eslint',
    'prettier/vue',
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
    ...vue2TypescriptSettings,
  },
};
