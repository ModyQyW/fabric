import { GLOB_EXCLUDE } from "../../constants.ts";
import type { Config, IgnoresOptions } from "../types.ts";

export function ignores(options: IgnoresOptions = {}): Config[] {
  const { ignores = GLOB_EXCLUDE } = options;
  return [{ ignores }];
}
