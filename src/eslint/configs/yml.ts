import { GLOB_YAML } from '../../constants';
import { parserYml, pluginYml } from '../plugins';
import type { Config, Rules } from '../types';

export function yml({ rules = {} }: { rules?: Rules } = {}): Config[] {
  return [
    {
      files: [GLOB_YAML],
      languageOptions: {
        parser: parserYml,
      },
      plugins: {
        yml: pluginYml,
      },
      rules: {
        ...pluginYml.configs.standard.rules,
        ...pluginYml.configs.prettier.rules,
        ...rules,
      },
    },
  ];
}
