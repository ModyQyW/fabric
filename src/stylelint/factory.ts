import { GLOB_EXCLUDE } from '../constants';
import { extends_, plugins, rules } from './configs';
import { parseOptions } from './utils';
import type { Config, Options } from './types';

export function stylelint(
  options: Options = {},
  userConfig: Config = {},
): Config {
  const parsed = parseOptions(options);

  return {
    extends: extends_(parsed),
    ignoreFiles: GLOB_EXCLUDE,
    overrides: [
      {
        customSyntax: 'postcss-html',
        files: ['*.vue', '**/*.vue'],
      },
    ],
    plugins: plugins(parsed),
    reportDescriptionlessDisables: true,
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
    rules: rules(parsed),
    ...userConfig,
  };
}
