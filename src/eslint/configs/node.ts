import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginN } from '../plugins';
import type { Config, Rules } from '../types';

export function node({ rules = {} }: { rules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_SCRIPT, GLOB_VUE],
      plugins: {
        n: pluginN,
      },
      rules: {
        ...pluginN.configs['flat/recommended'].rules,
        'n/no-missing-import': 'off',
        'n/no-missing-require': 'off',
        ...rules,
      },
    },
  ];
}
