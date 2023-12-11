import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginN } from '../plugins';
import type { Config, NodeOptions } from '../types';

export function node(options: NodeOptions = {}): Config[] {
  const { files = [GLOB_SCRIPT, GLOB_VUE], rules = {} } = options;
  return [
    {
      files,
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
