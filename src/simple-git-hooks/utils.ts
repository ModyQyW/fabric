import { hasCommitlint, hasLintStaged } from '../env';
import { Options } from './types';

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    commitlint: options.commitlint ?? hasCommitlint,
    lintStaged: options.lintStaged ?? hasLintStaged,
  };
}
