import {
  hasNext,
  hasNuxt,
  hasReact,
  hasReactNative,
  hasSolid,
  hasTypeScript,
  hasUnoCss,
  hasVue,
} from '../env';
import type { Options } from './types';

export function parseOptions(options: Options = {}): Required<Options> {
  return {
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
    prettier: options.prettier ?? true,
    react: options.react ?? hasReact,
    reactNative: options.reactNative ?? hasReactNative,
    regexp: options.regexp ?? true,
    solid: options.solid ?? hasSolid,
    typescript: options.typescript ?? hasTypeScript,
    unicorn: options.unicorn ?? true,
    unocss: options.unocss ?? hasUnoCss,
    vue: options.vue ?? hasVue,
    yml: options.yml ?? true,
  };
}
