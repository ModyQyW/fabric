import type { Linter } from 'eslint';

export const baseParser = '@babel/eslint-parser';
export const baseParserOptions: Linter.ParserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  ecmaFeatures: { globalReturn: false, jsx: true },
  requireConfigFile: false,
};

export const typescriptParser = '@typescript-eslint/parser';
export const typescriptParserOptions: Linter.ParserOptions = {
  ...baseParserOptions,
};

export const vueParser = 'vue-eslint-parser';
export const vueParserOptions: Linter.ParserOptions = {
  ...baseParserOptions,
  parser: {
    js: baseParser,
    jsx: baseParser,
    ts: typescriptParser,
    tsx: typescriptParser,
  },
};

export const jsonParser = 'jsonc-eslint-parser';

export const yamlParser = 'yaml-eslint-parser';
