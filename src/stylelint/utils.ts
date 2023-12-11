import { hasScss } from '../env';
import type { Options } from './types';

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    order: options.order ?? true,
    scss: options.scss ?? hasScss,
    style: options.style ?? 'recommended',
  };
}
