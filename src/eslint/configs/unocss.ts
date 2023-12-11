import { GLOB_SCRIPT, GLOB_VUE } from '../../constants';
import { pluginUnocss } from '../plugins';
import type { Config, UnoCssOptions } from '../types';

export function unocss(options: UnoCssOptions = {}): Config[] {
  const { files = [GLOB_SCRIPT, GLOB_VUE], rules = {} } = options;
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
