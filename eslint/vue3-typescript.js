const commonTypescriptRules = require('./rules/common-typescript');
const vue3TypescriptRules = require('./rules/vue3-typescript');
const vue3TypescriptSettings = require('./settings/vue3-typescript');

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb-typescript/base',
    'plugin:vue/vue3-recommended',
    'prettier',
    'prettier/prettier',
    'prettier/unicorn',
    'prettier/@typescript-eslint',
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
    ...commonTypescriptRules,
    ...vue3TypescriptRules,
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
  settings: { ...vue3TypescriptSettings },
};
