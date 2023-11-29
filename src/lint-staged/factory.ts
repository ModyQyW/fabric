import { excludeLockFiles, parseOptions } from './utils';
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

  const config: Config = {
    '*.{css,scss,vue}': 'stylelint --fix --cache --ignore-path=.gitignore',
    '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}': 'eslint --fix --cache',
    '*.md': 'markdownlint --fix --ignore-path=.gitignore',
  };

  if (enableESLint) {
    config['*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue}'] = 'eslint --fix --cache';
    if (lintJsonc) {
      config['*.{json,jsonc,json5}'] = (files) => {
        const excluded = excludeLockFiles(files);
        return `eslint ${excluded.join(' ')} --fix --cache`;
      };
    }
    if (lintYml) {
      config['*.{yaml,yml}'] = (files) => {
        const excluded = excludeLockFiles(files);
        return `eslint ${excluded.join(' ')} --fix --cache`;
      };
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
    config[`*`] = (files) => {
      const excluded = excludeLockFiles(files);
      return `prettier ${excluded.join(' ')} --ignore-unknown --write --cache`;
    };
  }

  return {
    ...config,
    ...userConfig,
  };
}
