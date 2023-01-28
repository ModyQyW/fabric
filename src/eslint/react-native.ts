import '@rushstack/eslint-patch/modern-module-resolution';
import type { Linter } from 'eslint';

const config: Linter.Config = {
  extends: [
    'plugin:react-native/all',
    'plugin:react-native-a11y/all',
    'plugin:prettier/recommended',
  ],
};

export default config;
