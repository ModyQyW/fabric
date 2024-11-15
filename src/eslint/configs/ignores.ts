import { GLOB_EXCLUDE } from "../../constants.ts";
import type { Config, IgnoresOptions } from "../types.ts";

export function ignores(options: IgnoresOptions = {}): Config[] {
  return [
    {
      name: "ignores/base",
      ignores: options.ignores ?? GLOB_EXCLUDE,
    },
  ];
}
