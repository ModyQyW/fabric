module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  // https://github.com/prettier/prettier/issues/8056
  plugins: [
    './node_modules/prettier-plugin-jsdoc',
    './node_modules/prettier-plugin-packagejson',
    './node_modules/prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: ['*.css', '*.less', '*.scss'],
      options: {
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
};
