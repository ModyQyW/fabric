/* eslint-disable unicorn/prefer-module */
import type { Config } from 'prettier';
import getDebug from 'debug';

const debug = getDebug('@modyqyw/fabric/prettier');

debug('JSDoc plugin enabled.');
debug('PackageJson Plugin enabled.');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const config: Config & { [key: string]: any } = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  jsdocCapitalizeDescription: false,
  tsdoc: true,
  plugins: [
    require.resolve('prettier-plugin-jsdoc'),
    require.resolve('prettier-plugin-packagejson'),
  ].filter((item) => !!item) as string[],
};

export default config;
/* eslint-enable unicorn/prefer-module */
