const commonRules = require('./rules/common');
const commonTypescriptRules = require('./rules/common-typescript');
const reactRules = require('./rules/react');
const reactTypescriptRules = require('./rules/react-typescript');
const reactSettings = require('./settings/react');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/prettier',
    'prettier/unicorn',
    'prettier/react',
  ],
  env: {
    browser: true,
    es2021: true,
    jest: true,
    mocha: true,
    node: true,
  },
  rules: {
    ...commonRules,
    ...reactRules,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
      ],
      rules: {
        ...commonTypescriptRules,
        ...reactTypescriptRules,
      },
    },
  ],
  settings: reactSettings,
};
