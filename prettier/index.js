/** @type {import('prettier').Config} */
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
      files: [
        '*.css',
        '*.less',
        '*.scss',
        '*.json',
        '*.jsonc',
        '*.json5',
        '**/*.css',
        '**/*.less',
        '**/*.scss',
        '**/*.json',
        '**/*.jsonc',
        '**/*.json5',
      ],
      options: {
        singleQuote: false,
        trailingComma: 'none',
      },
    },
    {
      files: ['*.yaml', '*.yml', '**/*.yaml', '**/*.yml'],
      options: {
        trailingComma: 'none',
      },
    },
  ],
};
