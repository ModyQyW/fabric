import {
  hasBiome,
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
  const biome = options.biome ?? hasBiome;

  return {
    biome,
    eslint: biome ? false : options.eslint ?? hasESLint,
    formatChangelog: options.formatChangelog ?? false,
    lintJsonc: options.lintJsonc ?? options.jsonc ?? true,
    lintYml: options.lintYml ?? options.yml ?? true,
    markdownlint: biome ? false : options.markdownlint ?? hasMarkdownlintCli,
    oxlint: biome ? false : options.oxlint ?? hasOxlint,
    prettier: biome ? false : options.prettier ?? hasPrettier,
    stylelint: biome ? false : options.stylelint ?? hasStylelint,
  };
}
