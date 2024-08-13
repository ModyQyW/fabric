import { parseOptions } from './utils';
import type { Config, Options } from './types';

export function prettier(
  options: Options = {},
  userConfig: Config = {},
): Config {
  const { jsdoc } = parseOptions(options);

  const plugins = [];
  if (jsdoc) plugins.push('prettier-plugin-jsdoc');

  return {
    plugins,
    singleQuote: true,

    jsdocCapitalizeDescription: false,
    tsdoc: true,

    ...userConfig,
  };
}
