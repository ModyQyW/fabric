import '@rushstack/eslint-patch/modern-module-resolution';
import type * as ESLint from 'eslint';

export const config: ESLint.Linter.Config = {
  extends: ['plugin:react-native/all', 'plugin:prettier/recommended'],
};

export default config;
