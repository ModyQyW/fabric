import { GLOB_YAML } from '../../constants';
import { parserYml, pluginYml } from '../plugins';
import type { Config, YmlOptions } from '../types';

export function yml(options: YmlOptions = {}): Config[] {
  const { files = [GLOB_YAML], rules = {} } = options;
  return [
    {
      files,
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
