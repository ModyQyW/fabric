import { parseOptions } from './utils';
import type { Config, Options } from './types';

export function lintStaged(
  options: Options = {},
  userConfig: Config = {},
): Config {
  const {
    eslint: enableESLint,
    jsonc: lintJsonc,
    markdownlint: enableMarkdownlint,
    oxlint: enableOxlint,
    prettier: enablePrettier,
    stylelint: enableStylelint,
    yml: lintYml,
  } = parseOptions(options);

  const config: Config = {};

  if (enableOxlint && enableESLint) {
    config['*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}'] = [
      'oxlint --deny=correctness --deny=perf --fix',
      'eslint --fix --cache --no-error-on-unmatched-pattern',
    ];
  } else if (enableOxlint) {
    config['*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}'] =
      'oxlint --deny=correctness --deny=perf --fix';
  } else if (enableESLint) {
    config['*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}'] =
      'eslint --fix --cache --no-error-on-unmatched-pattern';
  }

  if (enableESLint) {
    if (lintJsonc) {
      config['*.{json,jsonc,json5}'] =
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
    config['*'] =
      'prettier "!**/package-lock.json" "!**/yarn.lock" "!**/pnpm-lock.yaml" --ignore-unknown --write --cache';
  }

  return {
    ...config,
    ...userConfig,
  };
}
