import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginRegexp } from '../plugins';
import type { Config, RegExpOptions } from '../types';

export function regexp(options: RegExpOptions = {}): Config[] {
  const { files = [GLOB_SCRIPT, GLOB_VUE], rules = {} } = options;
  return [
    {
      files,
      plugins: {
        regexp: pluginRegexp,
      },
      rules: {
        ...pluginRegexp.configs.recommended.rules,
        ...rules,
      },
    },
  ];
}
