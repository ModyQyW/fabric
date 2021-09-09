import type { Linter } from 'eslint';
import env from './env';
import globals from './globals';
import overrides from './overrides';
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
    'airbnb',
    'airbnb/hooks',
    'plugin:regexp/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:jsonc/prettier',
    'plugin:toml/standard',
    'plugin:yml/standard',
    'plugin:yml/prettier',
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
  },
  overrides: [
    ...overrides,
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
      plugins: ['regexp', 'prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:regexp/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:jsonc/prettier',
        'plugin:toml/standard',
        'plugin:yml/standard',
        'plugin:yml/prettier',
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
