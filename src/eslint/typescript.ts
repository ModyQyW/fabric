import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.mts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts', '.json'],
      },
      typescript: {
        extensions: ['.js', '.mjs', '.jsx', '.ts', '.mts', '.tsx', '.d.ts', '.json'],
      },
    },
  },
  rules: {
    // better not to use any
    // but the truth is, you have no way to get rid of it
    '@typescript-eslint/no-explicit-any': 'warn',
    // TypeScript provides the same checks as part of standard type checking
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
  },
};

export default config;
