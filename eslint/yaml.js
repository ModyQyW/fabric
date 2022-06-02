require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
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
