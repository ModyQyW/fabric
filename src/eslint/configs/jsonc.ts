import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from '../../constants';
import { parserJsonc, pluginJsonc } from '../plugins';
import type { Config, JsoncOptions } from '../types';

export function jsonc(options: JsoncOptions = {}): Config[] {
  const { files = [GLOB_JSON, GLOB_JSON5, GLOB_JSONC], rules = {} } = options;
  return [
    {
      files,
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
