import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginUnocss } from '../plugins';
import type { Config, Rules } from '../types';

export function unocss({ rules = {} }: { rules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_SCRIPT, GLOB_VUE],
      plugins: {
        '@unocss': pluginUnocss,
      },
      rules: {
        ...pluginUnocss.configs.recommended.rules,
        // avoid conflicts
        '@unocss/order-attributify': 'off',
        ...rules,
      },
    },
  ];
}
