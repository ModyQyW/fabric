import { parseOptions } from './utils';
import type { Config, Options } from './types';

export function commitlint(
  options: Options = {},
  userConfig: Config = {},
): Config {
  const { monorepo, style } = parseOptions(options);

  const extends_: string[] = [];

  // handle style
  if (style === 'conventional') {
    extends_.push('@commitlint/config-conventional');
  } else if (style === 'angular') {
    extends_.push('@commitlint/config-angular');
  }

  // handle monorepo
  switch (monorepo) {
    case 'lerna': {
      extends_.push('@commitlint/config-lerna-scopes');
      break;
    }
    case 'nx': {
      extends_.push('@commitlint/config-nx-scopes');
      break;
    }
    case 'pnpm-workspace': {
      extends_.push('@commitlint/config-pnpm-scopes');
      break;
    }
    case 'rush': {
      extends_.push('@commitlint/config-rush-scopes');
      break;
    }
    default: {
      break;
    }
  }

  return {
    extends: extends_,
    ...userConfig,
  };
}
