import { hasLerna, hasNx, hasPnpmWorkspace, hasRush } from '../env';
import type { Options } from './types';

export function parseOptions(options: Options = {}): Required<Options> {
  let { monorepo = true } = options;
  const { style = 'conventional' } = options;
  if (monorepo === true) {
    monorepo = hasPnpmWorkspace
      ? 'pnpm-workspace'
      : hasLerna
        ? 'lerna'
        : hasNx
          ? 'nx'
          : hasRush
            ? 'rush'
            : false;
  }
  return {
    monorepo,
    style,
  };
}
