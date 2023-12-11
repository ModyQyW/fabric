import { combine, isBoolean } from '../utils';
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
  prettier,
  react,
  reactNative,
  regexp,
  solid,
  typescript,
  unicorn,
  unocss,
  vue,
  yml,
} from './configs';
import { parseOptions } from './utils';
import type { Config, Options } from './types';

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
    prettier: prettierOptions,
    react: reactOptions,
    reactNative: reactNativeOptions,
    regexp: regexpOptions,
    solid: solidOptions,
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
  if (unocssOptions) {
    if (isBoolean(unocssOptions)) configs.push(unocss());
    else configs.push(unocss(unocssOptions));
  }

  if (jsdocOptions) {
    if (isBoolean(jsdocOptions)) configs.push(jsdoc());
    else configs.push(jsdoc(jsdocOptions));
  }
  if (jsoncOptions) {
    if (isBoolean(jsoncOptions)) configs.push(jsonc());
    else configs.push(jsonc(jsoncOptions));
  }
  if (ymlOptions) {
    if (isBoolean(ymlOptions)) configs.push(yml());
    else configs.push(yml(ymlOptions));
  }

  if (javascriptOptions) {
    if (isBoolean(javascriptOptions)) configs.push(javascript());
    else configs.push(javascript(javascriptOptions));
  }
  if (typescriptOptions) {
    if (isBoolean(typescriptOptions)) configs.push(typescript());
    else configs.push(typescript(typescriptOptions));
  }
  if (markdownOptions) {
    if (isBoolean(markdownOptions)) configs.push(markdown());
    else configs.push(markdown(markdownOptions));
  }

  if (vueOptions) {
    if (isBoolean(vueOptions)) configs.push(vue());
    else configs.push(vue(vueOptions));
  }
  if (nuxtOptions) {
    if (isBoolean(nuxtOptions)) configs.push(nuxt());
    else configs.push(nuxt(nuxtOptions));
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

  if (solidOptions) {
    if (isBoolean(solidOptions)) configs.push(solid());
    else configs.push(solid(solidOptions));
  }

  if (prettierOptions) {
    if (isBoolean(prettierOptions)) configs.push(prettier());
    else configs.push(prettier(prettierOptions));
  }

  return combine(configs, userConfigs);
}
