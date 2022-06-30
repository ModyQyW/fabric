require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['plugin:solid/typescript', 'plugin:prettier/recommended'],
};
