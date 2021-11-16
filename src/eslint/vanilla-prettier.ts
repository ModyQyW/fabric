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
  plugins: ['regexp', 'prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb-base',
    'plugin:regexp/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
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
    'prettier/prettier': 'warn',
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['regexp', 'prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:regexp/recommended',
        'plugin:eslint-comments/recommended',
        'prettier',
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
