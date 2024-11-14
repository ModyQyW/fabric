import { defu } from "defu";
import { configGitignore } from "../plugins.ts";
import type { Config, GitignoreOptions } from "../types.ts";

export function gitignore(options: GitignoreOptions = {}): Config[] {
  return [
    configGitignore(
      defu(options, {
        files: [".gitignore", ".eslintignore"],
        strict: false,
      }),
    ),
  ];
}
