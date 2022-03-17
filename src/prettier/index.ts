import type { Config } from 'prettier';

const config: Config = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    './node_modules/prettier-plugin-jsdoc',
    './node_modules/prettier-plugin-packagejson',
    './node_modules/prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: ['*.css', '*.less', '*.scss', '*.sass'],
      options: {
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
};

export default config;
