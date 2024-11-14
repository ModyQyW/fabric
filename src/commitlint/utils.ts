import { hasLerna, hasNx, hasPnpmWorkspace, hasRush } from "../env.ts";
import type { Options } from "./types.ts";

export function parseOptions(options: Options = {}): Required<Options> {
  const { style = "conventional" } = options;

  let { monorepo = true } = options;
  if (monorepo === true) {
    monorepo = hasPnpmWorkspace
      ? "pnpm-workspace"
      : hasLerna
        ? "lerna"
        : hasNx
          ? "nx"
          : hasRush
            ? "rush"
            : false;
  }

  return {
    monorepo,
    style,
  };
}
