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
    config['*'] = (filenames) => {
      return filenames
        .filter(
          (f) =>
            f.endsWith('package-lock.json') ||
            f.endsWith('yarn.lock') ||
            f.endsWith('pnpm-lock.yaml') ||
            f.endsWith('auto-import.d.ts') ||
            f.endsWith('auto-imports.d.ts') ||
            f.endsWith('components.d.ts') ||
            f.endsWith('typed-router.d.ts') ||
            f.endsWith('uni-pages.d.ts'),
        )
        .map((f) => `prettier --ignore-unknown --write --cache ${f}`);
    };
  }

  return {
    ...config,
    ...userConfig,
  };
}
