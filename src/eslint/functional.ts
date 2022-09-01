import '@rushstack/eslint-patch/modern-module-resolution';
import type * as ESLint from 'eslint';

export const config: ESLint.Linter.Config = {
  extends: [
    'plugin:functional/external-recommended',
    'plugin:functional/recommended',
    'plugin:functional/stylistic',
    'plugin:prettier/recommended',
  ],
};

export default config;
