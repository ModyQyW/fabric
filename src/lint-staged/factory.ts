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
    prettier: enablePrettier,
    stylelint: enableStylelint,
    tsc: enableTsc,
    tsconfigJson,
    vueTsc: enableVueTsc,
    yml: lintYml,
    zhPatterns,
    zhlint: enableZhlint,
  } = parseOptions(options);

  const config: Config = {};

  if (enableESLint) {
    config['*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}'] =
      'eslint --fix --cache --no-error-on-unmatched-pattern';
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
  if (enableZhlint) {
    for (const p of zhPatterns) {
      config[p] = 'zhlint --fix --ignore=.gitignore';
    }
  }

  if (enableTsc || enableVueTsc) {
    config['*.{ts,cts,mts,tsx,vue}'] = () =>
      `${enableVueTsc ? 'vue-tsc' : 'tsc'} -p ${tsconfigJson} --noEmit`;
  }

  if (enablePrettier) {
    config['*'] = 'prettier "!*lock*" --ignore-unknown --write --cache';
  }

  return {
    ...config,
    ...userConfig,
  };
}
