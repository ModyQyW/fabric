/* eslint-disable unicorn/prefer-module */
import type { Config } from 'prettier';
import getDebug from 'debug';
import { enableTailwindIcons } from './helpers';

const debug = getDebug('@modyqyw/fabric/prettier');

debug('JSDoc plugin enabled.');
debug('PackageJson Plugin enabled.');
if (!enableTailwindIcons) {
  debug('TailwindCSS plugin enabled.');
}

const config: Config & { [key: string]: any } = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  jsdocCapitalizeDescription: false,
  tsdoc: true,
  plugins: [
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-packagejson'),
    enableTailwindIcons ? null : require.resolve('prettier-plugin-tailwindcss'),
  ].filter((item) => !!item) as string[],
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
