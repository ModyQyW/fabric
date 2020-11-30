const commonRules = require('./rules/common');
const commonTypescriptRules = require('./rules/common-typescript');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['plugin:unicorn/recommended', 'airbnb-base', 'prettier'],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    jquery: true,
    mocha: true,
    node: true,
  },
  rules: {
    ...commonRules,
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb-typescript/base',
        'prettier',
        'prettier/@typescript-eslint',
      ],
      rules: {
        ...commonTypescriptRules,
      },
    },
  ],
};
