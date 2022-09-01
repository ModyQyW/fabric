import '@rushstack/eslint-patch/modern-module-resolution';
import type * as ESLint from 'eslint';

export const config: ESLint.Linter.Config = {
  extends: ['plugin:css/recommended', 'plugin:prettier/recommended'],
};

export default config;