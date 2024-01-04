import {
  hasESLint,
  hasMarkdownlintCli,
  hasOxlint,
  hasPrettier,
  hasStylelint,
  hasTsconfigAppJson,
  hasTsconfigTestJson,
  hasTsconfigVitestJson,
  hasTypeScript,
  hasVueTsc,
} from '../env';
import type { Options } from './types';

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    eslint: options.eslint ?? hasESLint,
    jsonc: options.jsonc ?? true,
    markdownlint: options.markdownlint ?? hasMarkdownlintCli,
    oxlint: options.oxlint ?? hasOxlint,
    prettier: options.prettier ?? hasPrettier,
    stylelint: options.stylelint ?? hasStylelint,
    tsc: options.tsc ?? hasTypeScript,
    tsconfigJson:
      options.tsconfigJson ?? hasTsconfigTestJson
        ? 'tsconfig.test.json'
        : hasTsconfigVitestJson
          ? 'tsconfig.vitest.json'
          : hasTsconfigAppJson
            ? 'tsconfig.app.json'
            : 'tsconfig.json',
    vueTsc: options.vueTsc ?? hasVueTsc,
    yml: options.yml ?? true,
  };
}
