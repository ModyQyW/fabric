import { hasCommitlint, hasLintStaged } from "../env.ts";
import type { Options } from "./types.ts";

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    commitlint: options.commitlint ?? hasCommitlint,

    lintStaged: options.lintStaged ?? hasLintStaged,
  };
}
