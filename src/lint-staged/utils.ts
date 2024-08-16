import {
  hasBiome,
  hasESLint,
  hasMarkdownlintCli,
  hasOxlint,
  hasPrettier,
  hasStylelint,
} from "../env";
import type { Options } from "./types";

export function parseOptions(
  options: Options = {},
): Required<Omit<Options, "jsonc" | "yml">> {
  const biome = options.biome ?? hasBiome;

  return {
    biome,
    eslint: options.eslint ?? (hasESLint && !biome),
    formatChangelog: options.formatChangelog ?? false,
    lintJsonc: options.lintJsonc ?? true,
    lintToml: options.lintToml ?? true,
    lintYml: options.lintYml ?? true,
    markdownlint: options.markdownlint ?? hasMarkdownlintCli,
    oxlint: options.oxlint ?? (hasOxlint && !biome),
    prettier: options.prettier ?? (hasPrettier && !biome),
    stylelint: options.stylelint ?? (hasStylelint && !biome),
  };
}
