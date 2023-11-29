import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../../constants';
import { parserJsonc, pluginJsonc } from '../plugins';
import type { Config, Rules } from '../types';

export function jsonc({ rules = {} }: { rules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
      languageOptions: {
        parser: parserJsonc,
      },
      plugins: {
        jsonc: pluginJsonc,
      },
      rules: {
        ...pluginJsonc.configs['recommended-with-jsonc'].rules,
        ...rules,
      },
    },
  ];
}
