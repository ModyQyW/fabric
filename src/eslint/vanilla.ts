import env from './env';
import globals from './globals';
import rules from './rules';
import settings from './settings';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  extends: ['airbnb-base', 'plugin:eslint-comments/recommended', 'plugin:regexp/recommended'],
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
  settings: {
    ...settings,
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
        'plugin:regexp/recommended',
      ],
      rules: {
        ...rules.vanillaTypescript,
      },
    },
  ],
};

export default config;
