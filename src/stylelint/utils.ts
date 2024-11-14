import { hasScss } from "../env.ts";
import type { Options } from "./types.ts";

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    order: options.order ?? true,

    highPerformanceAnimation: options.highPerformanceAnimation ?? true,

    defensiveCss: options.defensiveCss ?? true,

    logicalCss: options.logicalCss ?? false,

    scss: options.scss ?? hasScss,
  };
}
