/** @type {import('stylelint').Config} */
module.exports = {
  overrides: [
    {
      files: ['*.svelte', '**/*.svelte'],
      customSyntax: 'postcss-html',
    },
  ],
};
