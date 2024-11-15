import {
  hasNext,
  hasNuxt,
  hasReact,
  hasReactNative,
  hasTailwindCss,
  hasTypeScript,
  hasUnoCss,
  hasVue,
} from "../env.ts";
import type { Options, Config } from "./types.ts";

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    gitignore: options.gitignore ?? true,
    ignores: options.ignores ?? true,
    javascript: options.javascript ?? true,
    typescript: options.typescript ?? hasTypeScript,
    command: options.command ?? true,
    jsdoc: options.jsdoc ?? false,
    imports: options.imports ?? true,
    unusedImports: options.unusedImports ?? true,
    promise: options.promise ?? true,
    regexp: options.regexp ?? true,
    node: options.node ?? true,
    perfectionist: options.perfectionist ?? true,
    unicorn: options.unicorn ?? true,
    react: options.react ?? hasReact,
    reactNative: options.reactNative ?? hasReactNative,
    next: options.next ?? hasNext,
    vue: options.vue ?? hasVue,
    nuxt: options.nuxt ?? hasNuxt,
    tailwindcss: options.tailwindcss ?? hasTailwindCss,
    unocss: options.unocss ?? hasUnoCss,
    markdown: options.markdown ?? true,
    jsonc: options.jsonc ?? true,
    toml: options.toml ?? true,
    yml: options.yml ?? true,
  };
}

/**
 * Combine arrays into one.
 *
 * @param args Arrays
 * @returns Array
 */
export function combine(...args: (Config | Config[])[]) {
  return args.flat(Number.POSITIVE_INFINITY) as Config[];
}
