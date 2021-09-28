import type { Options } from 'prettier';

const config: Options &
  Partial<{ overrides: { files: string | string[]; options: Options }[] }> = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  // @ts-ignore
  bracketSameLine: false,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  overrides: [
    {
      files: ['*.css', '*.less', '*.scss'],
      options: {
        printWidth: 240,
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
};

export default config;
