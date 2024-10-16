import {
  hasNext,
  hasNuxt,
  hasReact,
  hasReactNative,
  hasTailwindCss,
  hasTypeScript,
  hasUnoCss,
  hasVue,
} from "../env";
import type { Options, Config } from "./types";

export function parseOptions(options: Options = {}): Required<Options> {
  return {
    command: options.command ?? true,
    gitignore: options.gitignore ?? true,
    ignores: options.ignores ?? true,
    imports: options.imports ?? true,
    javascript: options.javascript ?? true,
    jsdoc: options.jsdoc ?? false,
    jsonc: options.jsonc ?? true,
    markdown: options.markdown ?? true,
    next: options.next ?? hasNext,
    node: options.node ?? true,
    nuxt: options.nuxt ?? hasNuxt,
    perfectionist: options.perfectionist ?? true,
    promise: options.promise ?? true,
    react: options.react ?? hasReact,
    reactNative: options.reactNative ?? hasReactNative,
    regexp: options.regexp ?? true,
    tailwindcss: options.tailwindcss ?? hasTailwindCss,
    toml: options.toml ?? true,
    typescript: options.typescript ?? hasTypeScript,
    unicorn: options.unicorn ?? true,
    unocss: options.unocss ?? hasUnoCss,
    vue: options.vue ?? hasVue,
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
