import { combine } from '../utils';
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
    gitignore: enableGitignore,
    ignores: enableIgnores,
    imports: enableImports,
    javascript: enableJavascript,
    jsdoc: enableJsdoc,
    jsonc: enableJsonc,
    markdown: enableMarkdown,
    next: enableNext,
    node: enableNode,
    nuxt: enableNuxt,
    perfectionist: enablePerfectionist,
    prettier: enablePrettier,
    react: enableReact,
    reactNative: enableReactNative,
    regexp: enableRegexp,
    solid: enableSolid,
    typescript: enableTypeScript,
    unicorn: enableUnicorn,
    unocss: enableUnocss,
    vue: enableVue,
    yml: enableYml,
  } = parseOptions(options);

  const configs: Config[][] = [];

  if (enableGitignore) configs.push(gitignore());
  if (enableIgnores) configs.push(ignores());
  if (enableImports) configs.push(imports());
  if (enableNode) configs.push(node());
  if (enablePerfectionist) configs.push(perfectionist());
  if (enableRegexp) configs.push(regexp());
  if (enableUnicorn) configs.push(unicorn());
  if (enableUnocss) configs.push(unocss());

  if (enableJsdoc) configs.push(jsdoc());
  if (enableJsonc) configs.push(jsonc());
  if (enableYml) configs.push(yml());

  if (enableJavascript) configs.push(javascript());
  if (enableTypeScript) configs.push(typescript());
  if (enableMarkdown) configs.push(markdown());

  if (enableVue) configs.push(vue());
  if (enableNuxt) configs.push(nuxt());

  if (enableReact) configs.push(react());
  if (enableReactNative) configs.push(reactNative());
  if (enableNext) configs.push(next());

  if (enableSolid) configs.push(solid());

  if (enablePrettier) configs.push(prettier());

  return combine(configs, userConfigs);
}
