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
        // handle by eslint-plugin-import / eslint-plugin-i
        'n/no-missing-import': 'off',
        // handle by eslint-plugin-import / eslint-plugin-i
        'n/no-missing-require': 'off',
        // allow source code for hashbang
        'n/hashbang': 'off',
        ...rules,
      },
    },
  ];
}
