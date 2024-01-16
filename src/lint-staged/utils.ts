import {
  hasESLint,
  hasMarkdownlintCli,
  hasOxlint,
  hasPrettier,
  hasStylelint,
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
    yml: options.yml ?? true,
  };
}
