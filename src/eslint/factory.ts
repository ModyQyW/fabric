import { isBoolean } from "../utils";
import {
  gitignore,
  ignores,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  next,
  node,
  nuxt,
  perfectionist,
  react,
  reactNative,
  regexp,
  tailwindcss,
  toml,
  typescript,
  unicorn,
  unocss,
  vue,
  yml,
} from "./configs";
import { parseOptions, combine } from "./utils";
import type { Config, Options } from "./types";

export function eslint(
  options: Options = {},
  userConfigs: (Config | Config[])[] = [],
): Config[] {
  const {
    gitignore: gitignoreOptions,
    ignores: ignoresOptions,
    imports: importsOptions,
    javascript: javascriptOptions,
    jsdoc: jsdocOptions,
    jsonc: jsoncOptions,
    markdown: markdownOptions,
    next: nextOptions,
    node: nodeOptions,
    nuxt: nuxtOptions,
    perfectionist: perfectionistOptions,
    react: reactOptions,
    reactNative: reactNativeOptions,
    regexp: regexpOptions,
    tailwindcss: tailwindcssOptions,
    toml: tomlOptions,
    typescript: typescriptOptions,
    unicorn: unicornOptions,
    unocss: unocssOptions,
    vue: vueOptions,
    yml: ymlOptions,
  } = parseOptions(options);

  const configs: Config[][] = [];

  if (gitignoreOptions) {
    if (isBoolean(gitignoreOptions)) configs.push(gitignore());
    else configs.push(gitignore(gitignoreOptions));
  }
  if (ignoresOptions) {
    if (isBoolean(ignoresOptions)) configs.push(ignores());
    else configs.push(ignores(ignoresOptions));
  }
  if (importsOptions) {
    if (isBoolean(importsOptions)) configs.push(imports());
    else configs.push(imports(importsOptions));
  }
  if (nodeOptions) {
    if (isBoolean(nodeOptions)) configs.push(node());
    else configs.push(node(nodeOptions));
  }
  if (perfectionistOptions) {
    if (isBoolean(perfectionistOptions)) configs.push(perfectionist());
    else configs.push(perfectionist(perfectionistOptions));
  }
  if (regexpOptions) {
    if (isBoolean(regexpOptions)) configs.push(regexp());
    else configs.push(regexp(regexpOptions));
  }
  if (unicornOptions) {
    if (isBoolean(unicornOptions)) configs.push(unicorn());
    else configs.push(unicorn(unicornOptions));
  }

  if (javascriptOptions) {
    if (isBoolean(javascriptOptions)) configs.push(javascript());
    else configs.push(javascript(javascriptOptions));
  }
  if (jsdocOptions) {
    if (isBoolean(jsdocOptions)) configs.push(jsdoc());
    else configs.push(jsdoc(jsdocOptions));
  }
  if (typescriptOptions) {
    if (isBoolean(typescriptOptions)) configs.push(typescript());
    else configs.push(typescript(typescriptOptions));
  }

  if (reactOptions) {
    if (isBoolean(reactOptions)) configs.push(react());
    else configs.push(react(reactOptions));
  }
  if (reactNativeOptions) {
    if (isBoolean(reactNativeOptions)) configs.push(reactNative());
    else configs.push(reactNative(reactNativeOptions));
  }
  if (nextOptions) {
    if (isBoolean(nextOptions)) configs.push(next());
    else configs.push(next(nextOptions));
  }

  if (vueOptions) {
    if (isBoolean(vueOptions)) configs.push(vue());
    else configs.push(vue(vueOptions));
  }
  if (nuxtOptions) {
    if (isBoolean(nuxtOptions)) configs.push(nuxt());
    else configs.push(nuxt(nuxtOptions));
  }

  if (tailwindcssOptions) {
    if (isBoolean(tailwindcssOptions)) configs.push(tailwindcss());
    else configs.push(tailwindcss(tailwindcssOptions));
  }
  if (unocssOptions) {
    if (isBoolean(unocssOptions)) configs.push(unocss());
    else configs.push(unocss(unocssOptions));
  }

  if (markdownOptions) {
    if (isBoolean(markdownOptions)) configs.push(markdown());
    else configs.push(markdown(markdownOptions));
  }
  if (jsoncOptions) {
    if (isBoolean(jsoncOptions)) configs.push(jsonc());
    else configs.push(jsonc(jsoncOptions));
  }
  if (tomlOptions) {
    if (isBoolean(tomlOptions)) configs.push(toml());
    else configs.push(toml(tomlOptions));
  }
  if (ymlOptions) {
    if (isBoolean(ymlOptions)) configs.push(yml());
    else configs.push(yml(ymlOptions));
  }

  return combine(...configs, ...userConfigs);
}
