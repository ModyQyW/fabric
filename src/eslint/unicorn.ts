import '@rushstack/eslint-patch/modern-module-resolution';
import type * as ESLint from 'eslint';

export const config: ESLint.Linter.Config = {
  extends: ['plugin:unicorn/recommended', 'plugin:prettier/recommended'],
  // rules: {
  //   'unicorn/filename-case': [
  //     'error',
  //     {
  //       cases: {
  //         camelCase: true,
  //         kebabCase: true,
  //         pascalCase: true,
  //       },
  //     },
  //   ],
  //   'unicorn/no-null': 'off',
  //   'unicorn/prefer-module': 'off',
  //   'unicorn/prevent-abbreviations': 'off',
  // },
};

export default config;
