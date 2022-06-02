require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
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
