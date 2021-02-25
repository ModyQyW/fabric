const commonEnv = require('./env/common');
const commonGlobals = require('./globals/common');
const commonRules = require('./rules/common');
const commonTypescriptRules = require('./rules/common-typescript');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: [
    // 'plugin:unicorn/recommended',
    'airbnb-base',
    'prettier',
  ],
  env: {
    ...commonEnv,
    jquery: true,
  },
  globals: {
    ...commonGlobals,
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
        // 'plugin:unicorn/recommended',
        'airbnb-typescript/base',
        'prettier',
      ],
      rules: {
        ...commonTypescriptRules,
      },
    },
  ],
};
