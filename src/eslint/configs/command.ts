import { configCommand } from "../plugins";
import type { Config, CommandOptions } from "../types";

export function command(options: CommandOptions = {}): Config[] {
  return [configCommand(options)];
}
