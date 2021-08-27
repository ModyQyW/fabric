import type { Linter } from 'eslint';
import env from './env';
import globals from './globals';
import rules from './rules';

const config: Linter.Config = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['prettier'],
  extends: ['plugin:unicorn/recommended', 'airbnb-base', 'prettier'],
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
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['prettier'],
      extends: [
        'plugin:unicorn/recommended',
        'airbnb-typescript/base',
        'prettier',
      ],
      rules: {
        ...rules.vanillaTypescript,
      },
    },
  ],
};

export default config;
