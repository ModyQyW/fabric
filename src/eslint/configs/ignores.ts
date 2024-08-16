import { GLOB_EXCLUDE } from "../../constants";
import type { Config, IgnoresOptions } from "../types";

export function ignores(options: IgnoresOptions = {}): Config[] {
  const { ignores = GLOB_EXCLUDE } = options;
  return [{ ignores }];
}
