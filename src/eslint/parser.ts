import type { Linter } from 'eslint';

export const javascriptParser = '@babel/eslint-parser';
export const javascriptParserOptions: Linter.ParserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module',
  ecmaFeatures: { globalReturn: false, jsx: true },
  requireConfigFile: false,
};

export const typescriptParser = '@typescript-eslint/parser';
export const typescriptParserOptions: Linter.ParserOptions = {
  ...javascriptParserOptions,
};

export const vueParser = 'vue-eslint-parser';
export const vueParserOptions: Linter.ParserOptions = {
  ...javascriptParserOptions,
  parser: {
    js: javascriptParser,
    jsx: javascriptParser,
    ts: typescriptParser,
    tsx: typescriptParser,
  },
};

export const svelteParser = 'svelte-eslint-parser';
export const svelteParserOptions: Linter.ParserOptions = {
  ...javascriptParserOptions,
  parser: {
    js: javascriptParser,
    jsx: javascriptParser,
    ts: typescriptParser,
    tsx: typescriptParser,
  },
};

export const jsonParser = 'jsonc-eslint-parser';

export const yamlParser = 'yaml-eslint-parser';
