/* eslint-disable unicorn/prefer-module */
import type { Config } from 'prettier';

const config: Config & { [key: string]: any } = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  jsdocCapitalizeDescription: false,
  tsdoc: true,
  plugins: [
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    {
      files: ['*.json5'],
      options: {
        singleQuote: false,
        quoteProps: 'preserve',
      },
    },
  ],
};

export default config;
/* eslint-enable unicorn/prefer-module */
