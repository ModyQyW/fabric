import { GLOB_EXCLUDE } from '../constants';
import { extends_, rules } from './configs';
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
    plugins: [
      'stylelint-high-performance-animation',
      // 'stylelint-plugin-defensive-css',
      // 'stylelint-plugin-logical-css',
    ],
    reportDescriptionlessDisables: true,
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
    rules: {
      ...rules(parsed),
      // stylelint-high-performance-animation
      'plugin/no-low-performance-animation-properties': true,
    },
    ...userConfig,
  };
}
