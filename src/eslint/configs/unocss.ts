import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginUnocss } from '../plugins';
import type { Config, Rules } from '../types';

export function unocss({
  files = [GLOB_SCRIPT, GLOB_VUE],
  rules = {},
}: { files?: string[]; rules?: Rules } = {}): Config[] {
  return [
    {
      files,
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
