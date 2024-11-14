import type { Options } from "./types.ts";

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    jsdoc: options.jsdoc ?? true,
  };
}
