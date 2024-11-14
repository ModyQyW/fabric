import { configCommand } from "../plugins.ts";
import type { Config, CommandOptions } from "../types.ts";

export function command(options: CommandOptions = {}): Config[] {
  return [configCommand(options)];
}
