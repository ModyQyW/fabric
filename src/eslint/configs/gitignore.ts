import { configGitignore } from '../plugins';
import defu from 'defu';
import type { Config, GitignoreOptions } from '../types';

export function gitignore(options: GitignoreOptions = {}): Config[] {
  return [
    configGitignore(
      defu(options, {
        files: ['.gitignore', '.eslintignore'],
        strict: false,
      }),
    ),
  ];
}
