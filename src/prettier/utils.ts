import type { Options } from "./types.ts";

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    curly: options.curly ?? true,
    jsdoc: options.jsdoc ?? true,
  };
}
