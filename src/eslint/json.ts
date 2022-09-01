import '@rushstack/eslint-patch/modern-module-resolution';
import type * as ESLint from 'eslint';

export const config: ESLint.Linter.Config = {
  overrides: [
    {
      files: ['*.json', '*.jsonc', '*.json5', '**/*.json', '**/*.jsonc', '**/*.json5'],
      parser: 'jsonc-eslint-parser',
      parserOptions: {
        jsonSyntax: 'JSONC',
      },
      extends: [
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:jsonc/prettier',
        'plugin:prettier/recommended',
      ],
      rules: {
        'unicorn/numeric-separators-style': 'off',
      },
    },
  ],
};

export default config;
