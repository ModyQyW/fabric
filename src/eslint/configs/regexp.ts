import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginRegexp } from '../plugins';
import type { Config, Rules } from '../types';

export function regexp({ rules = {} }: { rules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_SCRIPT, GLOB_VUE],
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
