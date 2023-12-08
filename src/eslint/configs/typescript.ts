import { GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE } from '../../constants';
import { hasVue } from '../../env';
import { parserTypeScript, pluginTypeScript } from '../plugins';
import type { Config, Rules } from '../types';

export function typescript({
  files = hasVue
    ? [GLOB_DTS, GLOB_TS, GLOB_TSX, GLOB_VUE]
    : [GLOB_DTS, GLOB_TS, GLOB_TSX],
  rules = {},
}: { files?: string[]; rules?: Rules } = {}): Config[] {
  return [
    {
      files,
      languageOptions: {
        parser: parserTypeScript,
      },
      plugins: {
        '@typescript-eslint': pluginTypeScript,
      },
      rules: {
        ...pluginTypeScript.configs['eslint-recommended'].overrides[0].rules,
        ...pluginTypeScript.configs.recommended.rules,
        // too ideal for business
        '@typescript-eslint/no-empty-function': 'off',
        // too ideal for business
        '@typescript-eslint/no-empty-interface': 'off',
        // too ideal for business
        '@typescript-eslint/no-explicit-any': 'off',
        // allow for prototyping
        '@typescript-eslint/no-unused-vars': 'warn',
        ...rules,
      },
    },
  ];
}
