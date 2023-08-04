import type { Config } from 'prettier';
import getDebug from 'debug';

const debug = getDebug('@modyqyw/fabric/prettier');

debug('JSDoc plugin enabled.');
debug('PackageJson Plugin enabled.');

const config: Config & Record<string, any> = {
  printWidth: 100,
  singleQuote: true,
  jsdocCapitalizeDescription: false,
  tsdoc: true,
  plugins: ['prettier-plugin-jsdoc', 'prettier-plugin-packagejson'],
};

export default config;
