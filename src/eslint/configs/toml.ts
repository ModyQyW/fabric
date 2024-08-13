import { GLOB_TOML } from '../../constants';
import { parserToml, pluginToml } from '../plugins';
import type { Config, TomlOptions } from '../types';

export function toml(options: TomlOptions = {}): Config[] {
  const { files = [GLOB_TOML], rules = {} } = options;
  return [
    {
      name: 'toml',
      files,
      plugins: {
        // @ts-expect-error not matched
        toml: pluginToml,
      },
      languageOptions: {
        parser: parserToml,
      },
      rules: {
        // https://github.com/ota-meshi/eslint-plugin-toml/blob/v0.11.1/src/configs/base.ts
        'no-irregular-whitespace': 'off',
        'spaced-comment': 'off',

        // https://github.com/ota-meshi/eslint-plugin-toml/blob/v0.11.1/src/configs/standard.ts
        // 'toml/array-bracket-newline': 'error',
        // 'toml/array-bracket-spacing': 'error',
        // 'toml/array-element-newline': 'error',
        // 'toml/comma-style': 'error',
        // 'toml/indent': 'error',
        'toml/inline-table-curly-spacing': 'error',
        // 'toml/key-spacing': 'error',
        'toml/keys-order': 'error',
        'toml/no-space-dots': 'error',
        'toml/no-unreadable-number-separator': 'error',
        // 'toml/padding-line-between-pairs': 'error',
        // 'toml/padding-line-between-tables': 'error',
        'toml/precision-of-fractional-seconds': 'error',
        'toml/precision-of-integer': 'error',
        // 'toml/quoted-keys': 'error',
        // 'toml/spaced-comment': 'error',
        'toml/table-bracket-spacing': 'error',
        'toml/tables-order': 'error',
        'toml/vue-custom-block/no-parsing-error': 'error',

        ...rules,
      },
    },
  ];
}
