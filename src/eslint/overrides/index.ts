import type { Linter } from 'eslint';

const overrides: Linter.ConfigOverride[] = [
  {
    files: ['*.json', '*.jsonc', '*.json5'],
    parser: 'jsonc-eslint-parser',
    parserOptions: {
      jsonSyntax: 'JSONC',
    },
  },
  {
    files: ['*.toml'],
    parser: 'toml-eslint-parser',
  },
  {
    files: ['*.yaml', '*.yml'],
    parser: 'yaml-eslint-parser',
  },
];

export default overrides;
