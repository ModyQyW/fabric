import type { Options } from "./types";

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    jsdoc: options.jsdoc ?? true,
  };
}
