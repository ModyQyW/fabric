import { GLOB_EXCLUDE } from '../constants';
import { filterFilenames } from '../utils';
import { parseOptions } from './utils';
import type { Config, Options } from './types';

export function lintStaged(
  options: Options = {},
  userConfig: Config = {},
): Config {
  const {
    biome: enableBiome,
    eslint: enableESLint,
    formatChangelog,
    lintJsonc,
    lintYml,
    lintToml,
    markdownlint: enableMarkdownlint,
    oxlint: enableOxlint,
    prettier: enablePrettier,
    stylelint: enableStylelint,
  } = parseOptions(options);

  const config: Config = {};

  if (enableBiome) {
    config['*'] =
      `biome check --write --no-errors-on-unmatched --files-ignore-unknown=true`;
  }

  if (enableOxlint && enableESLint) {
    // filter files for oxlint usage
    config['*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}'] = (filenames) => {
      const filtered = filterFilenames(filenames);
      return [
        `oxlint --fix ${filtered.join(' ')}`,
        `eslint --fix --cache --no-error-on-unmatched-pattern ${filtered.join(' ')}`,
      ];
    };
  } else if (enableOxlint) {
    // filter files for oxlint usage
    config['*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}'] = (filenames) => {
      const filtered = filterFilenames(filenames);
      return `oxlint --fix ${filtered.join(' ')}`;
    };
  } else if (enableESLint) {
    config['*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}'] =
      'eslint --fix --cache --no-error-on-unmatched-pattern';
  }

  if (enableESLint) {
    if (lintJsonc) {
      config['*.{json,jsonc,json5}'] =
        'eslint --fix --cache --no-error-on-unmatched-pattern';
    }
    if (lintToml) {
      config['*.{toml}'] =
        'eslint --fix --cache --no-error-on-unmatched-pattern';
    }
    if (lintYml) {
      config['*.{yaml,yml}'] =
        'eslint --fix --cache --no-error-on-unmatched-pattern';
    }
  }

  if (enableStylelint) {
    config['*.{css,scss,vue}'] =
      'stylelint --fix --cache --aei --ignore-path=.gitignore';
  }

  if (enableMarkdownlint) {
    config['*.{md,markdown}'] = 'markdownlint --fix --ignore-path=.gitignore';
  }

  if (enablePrettier) {
    // filter files for prettier usage
    config['*'] = (filenames) => {
      const filtered = filterFilenames(
        filenames,
        formatChangelog
          ? GLOB_EXCLUDE.filter((e) => !e.toUpperCase().includes('CHANGELOG'))
          : GLOB_EXCLUDE,
      );
      return filtered.map(
        (f) => `prettier --ignore-unknown --write --cache ${f}`,
      );
    };
  }

  return {
    ...config,
    ...userConfig,
  };
}
