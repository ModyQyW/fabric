const commonEnv = require('./env/common');
const commonGlobals = require('./globals/common');
const commonRules = require('./rules/common');
const commonTypescriptRules = require('./rules/common-typescript');
const reactRules = require('./rules/react');
const reactTypescriptRules = require('./rules/react-typescript');
const commonSettings = require('./settings/common');

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['prettier'],
  extends: ['plugin:unicorn/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  env: {
    ...commonEnv,
  },
  globals: {
    ...commonGlobals,
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
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb-typescript',
        'airbnb/hooks',
        'prettier',
      ],
      rules: {
        ...commonTypescriptRules,
        ...reactTypescriptRules,
      },
    },
  ],
  settings: {
    ...commonSettings,
  },
};
