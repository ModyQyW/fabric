import { hasScss } from '../env';
import type { Options } from './types';

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    order: options.order ?? true,

    highPerformanceAnimation: options.highPerformanceAnimation ?? true,

    defensiveCss: options.defensiveCss ?? true,

    logicalCss: options.logicalCss ?? false,

    scss: options.scss ?? hasScss,
  };
}
