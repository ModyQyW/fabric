import { GLOB_EXCLUDE } from "../constants.ts";
import { extends_, plugins, rules } from "./configs.ts";
import { parseOptions } from "./utils.ts";
import type { Config, Options } from "./types.ts";

export function stylelint(
  options: Options = {},
  userConfig: Config = {},
): Config {
  const parsed = parseOptions(options);

  return {
    extends: extends_(parsed),
    ignoreFiles: GLOB_EXCLUDE,
    plugins: plugins(parsed),
    reportDescriptionlessDisables: true,
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
    rules: rules(parsed),
    ...userConfig,
  };
}
