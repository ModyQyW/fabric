import { parseOptions } from './utils';
import type { Config, Options } from './types';

export function prettier(
  options: Options = {},
  userConfig: Config = {},
): Config {
  const {
    cssOrder,
    ianvsSortImports,
    jsdoc,
    organizeAttributes,
    organizeImports,
    packageJson,
    tailwindcss,
    trivagoSortImports,
  } = parseOptions(options);

  const plugins = [];
  if (cssOrder) plugins.push('prettier-plugin-css-order');
  if (ianvsSortImports) plugins.push('@ianvs/prettier-plugin-sort-imports');
  if (jsdoc) plugins.push('prettier-plugin-jsdoc');
  if (organizeAttributes) plugins.push('prettier-plugin-organize-attributes');
  if (organizeImports) plugins.push('prettier-plugin-organize-imports');
  if (packageJson) plugins.push('prettier-plugin-packagejson');
  if (trivagoSortImports) plugins.push('@trivago/prettier-plugin-sort-imports');
  if (tailwindcss) plugins.push('prettier-plugin-tailwindcss');

  return {
    plugins,
    singleQuote: true,

    jsdocCapitalizeDescription: false,
    tsdoc: true,

    ...userConfig,
  };
}
