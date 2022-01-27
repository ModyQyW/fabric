import type { Config } from 'prettier';

const config: Config = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
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
  plugins: [
    './node_modules/prettier-plugin-jsdoc',
    './node_modules/prettier-plugin-packagejson',
    './node_modules/prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: ['*.css', '*.less', '*.scss', '*.sass'],
      options: {
        singleQuote: false,
        trailingComma: 'none',
      },
    },
  ],
};

export default config;
