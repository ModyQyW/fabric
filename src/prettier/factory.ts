import { parseOptions } from "./utils.ts";
import type { Config, Options } from "./types.ts";

export function prettier(
  options: Options = {},
  userConfig: Config = {},
): Config {
  const { jsdoc } = parseOptions(options);

  const plugins = [];
  if (jsdoc) plugins.push("prettier-plugin-jsdoc");

  return {
    plugins,

    jsdocCapitalizeDescription: false,
    tsdoc: true,

    ...userConfig,
  };
}
