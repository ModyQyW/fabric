import {
  hasESLint,
  hasMarkdownlintCli,
  hasOxlint,
  hasPrettier,
  hasStylelint,
} from '../env';
import type { Options } from './types';

export function parseOptions(
  options: Options = {},
): Required<Omit<Options, 'jsonc' | 'yml'>> {
  return {
    eslint: options.eslint ?? hasESLint,
    formatChangelog: options.formatChangelog ?? false,
    lintJsonc: options.lintJsonc ?? options.jsonc ?? true,
    lintYml: options.lintYml ?? options.yml ?? true,
    markdownlint: options.markdownlint ?? hasMarkdownlintCli,
    oxlint: options.oxlint ?? hasOxlint,
    prettier: options.prettier ?? hasPrettier,
    stylelint: options.stylelint ?? hasStylelint,
  };
}
