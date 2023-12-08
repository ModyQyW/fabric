import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginRegexp } from '../plugins';
import type { Config, Rules } from '../types';

export function regexp({
  files = [GLOB_SCRIPT, GLOB_VUE],
  rules = {},
}: { files?: string[]; rules?: Rules } = {}): Config[] {
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
