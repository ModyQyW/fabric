import { configGitignore } from '../plugins';
import type { Config } from '../types';

export function gitignore({
  files = ['.gitignore', '.eslintignore'],
  strict = false,
} = {}): Config[] {
  return [
    configGitignore({
      files,
      strict,
    }),
  ];
}
