import { parseOptions } from './utils';
import type { Options } from './types';

export function simpleGitHooks(
  options: Options = {},
  userConfig: Record<string, string> = {},
) {
  const { commitlint: enableCommitlint, lintStaged: enableLintStaged } =
    parseOptions(options);

  const config: Record<string, string> = {};

  if (enableCommitlint) {
    config['commit-msg'] = 'npx commitlint --edit ${1}';
  }

  if (enableLintStaged) {
    config['pre-commit'] = 'npx lint-staged';
  }

  return {
    ...config,
    ...userConfig,
  };
}
