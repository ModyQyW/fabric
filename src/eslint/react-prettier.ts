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
    'airbnb',
    'airbnb/hooks',
    'plugin:eslint-comments/recommended',
    'plugin:regexp/recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    ...env,
  },
  globals: {
    ...globals,
  },
  rules: {
    ...rules.vanilla,
    ...rules.react,
    ...rules.prettier,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:regexp/recommended',
        'plugin:unicorn/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        ...rules.vanillaTypescript,
        ...rules.reactTypescript,
        ...rules.prettier,
      },
    },
  ],
  settings: {
    ...settings,
  },
};

export default config;
