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
  plugins: ['functional', 'regexp', 'prettier'],
  extends: [
    'plugin:unicorn/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:functional/recommended',
    'plugin:regexp/recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
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
    'prettier/prettier': 'warn',
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
      plugins: ['functional', 'regexp', 'prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:functional/recommended',
        'plugin:regexp/recommended',
        'plugin:eslint-comments/recommended',
        'prettier',
      ],
      rules: {
        ...rules.vanillaTypescript,
        ...rules.reactTypescript,
      },
    },
  ],
  settings: {
    ...settings,
  },
};

export default config;
