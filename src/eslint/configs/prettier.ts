import { configPrettier, pluginPrettier } from '../plugins';
import type { Config, PrettierOptions } from '../types';

export function prettier(options: PrettierOptions = {}): Config[] {
  const { rules = {} } = options;
  return [
    {
      plugins: {
        prettier: pluginPrettier,
      },
      rules: {
        ...configPrettier.rules,
        ...pluginPrettier.configs.recommended.rules,
        // run prettier directly
        'prettier/prettier': 'off',
        ...rules,
      },
    },
  ];
}
