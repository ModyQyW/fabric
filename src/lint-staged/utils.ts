import {
  hasESLint,
  hasMarkdownlintCli,
  hasPrettier,
  hasStylelint,
  hasTsconfigAppJson,
  hasTsconfigTestJson,
  hasTsconfigVitestJson,
  hasTypeScript,
  hasVueTsc,
  hasZhlint,
} from '../env';
import type { Options } from './types';

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    eslint: options.eslint ?? hasESLint,
    jsonc: options.jsonc ?? true,
    markdownlint: options.markdownlint ?? hasMarkdownlintCli,
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
    zhPatterns: options.zhPatterns ?? ['*.{zh-CN,zh-Hans}.{md,markdown}'],
    zhlint: options.zhlint ?? hasZhlint,
  };
}
