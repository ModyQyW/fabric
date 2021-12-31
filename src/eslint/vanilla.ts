import type { Linter } from 'eslint';
import env from './env';
import globals from './globals';
import rules from './rules';
import settings from './settings';

const config: Linter.Config = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [
    'airbnb-base',
    'plugin:eslint-comments/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
  ],
  env: {
    ...env,
    jquery: true,
  },
  globals: {
    ...globals,
  },
  rules: {
    ...rules.vanilla,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:eslint-comments/recommended',
        'plugin:you-dont-need-lodash-underscore/compatible',
        'plugin:regexp/recommended',
        'plugin:unicorn/recommended',
      ],
      rules: {
        ...rules.vanillaTypescript,
      },
    },
  ],
  settings: {
    ...settings,
  },
};

export default config;
