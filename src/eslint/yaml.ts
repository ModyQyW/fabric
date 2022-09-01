import '@rushstack/eslint-patch/modern-module-resolution';
import type * as ESLint from 'eslint';

export const config: ESLint.Linter.Config = {
  overrides: [
    {
      files: ['*.yaml', '*.yml', '**/*.yaml', '**/*.yml'],
      parser: 'yaml-eslint-parser',
      extends: ['plugin:yml/standard', 'plugin:yml/prettier', 'plugin:prettier/recommended'],
      rules: {
        'unicorn/numeric-separators-style': 'off',
      },
    },
  ],
};

export default config;
