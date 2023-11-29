import { GLOB_EXCLUDE } from '../constants';
import { extends_, overrides, rules } from './configs';
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
    overrides: overrides(parsed),
    reportDescriptionlessDisables: true,
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
    rules: rules(parsed),
    ...userConfig,
  };
}
