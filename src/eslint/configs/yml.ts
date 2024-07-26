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
        // @ts-expect-error not matched
        yml: pluginYml,
      },
      rules: {
        // https://github.com/ota-meshi/eslint-plugin-yml/blob/v1.14.0/src/configs/base.ts
        'no-irregular-whitespace': 'off',
        'no-unused-vars': 'off',
        'spaced-comment': 'off',

        // https://github.com/ota-meshi/eslint-plugin-yml/blob/v1.14.0/src/configs/standard.ts
        'yml/block-mapping': 'error',
        'yml/block-sequence': 'error',
        'yml/no-empty-document': 'error',
        'yml/no-empty-key': 'error',
        'yml/no-empty-mapping-value': 'error',
        'yml/no-empty-sequence-entry': 'error',
        'yml/no-irregular-whitespace': 'error',
        'yml/no-tab-indent': 'error',
        'yml/plain-scalar': 'error',
        'yml/spaced-comment': 'error',
        'yml/vue-custom-block/no-parsing-error': 'error',

        ...rules,
      },
    },
  ];
}
