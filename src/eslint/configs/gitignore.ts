import { configGitignore } from '../plugins';
import type { Config, GitignoreOptions } from '../types';

export function gitignore(options: GitignoreOptions = {}): Config[] {
  const { files = ['.gitignore', '.eslintignore'], strict = false } = options;
  return [
    configGitignore({
      files,
      strict,
    }),
  ];
}
