module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-tailwindcss'),
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
