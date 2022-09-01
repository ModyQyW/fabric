import type * as Prettier from 'prettier';

export const config: Prettier.Config = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-packagejson'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
};

export default config;
