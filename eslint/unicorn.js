require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
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
