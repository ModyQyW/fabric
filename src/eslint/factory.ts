import { isBoolean } from "../utils.ts";
import {
  barrel,
  command,
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
  promise,
  react,
  reactNative,
  regexp,
  tailwindcss,
  toml,
  typescript,
  unicorn,
  unocss,
  unusedImports,
  vue,
  yml,
} from "./configs/index.ts";
import { parseOptions, combine } from "./utils.ts";
import type { Config, Options } from "./types.ts";

export function eslint(
  options: Options = {},
  userConfigs: (Config | Config[])[] = [],
): Config[] {
  const {
    // ---- Ignores ----
    gitignore: gitignoreOptions,
    ignores: ignoresOptions,
    // ---- Languages ----
    javascript: javascriptOptions,
    typescript: typescriptOptions,
    // ---- Base ----
    command: commandOptions,
    jsdoc: jsdocOptions,
    imports: importsOptions,
    unusedImports: unusedImportsOptions,
    barrel: barrelOptions,
    promise: promiseOptions,
    regexp: regexpOptions,
    node: nodeOptions,
    perfectionist: perfectionistOptions,
    unicorn: unicornOptions,
    // ---- Frameworks ----
    react: reactOptions,
    reactNative: reactNativeOptions,
    next: nextOptions,
    vue: vueOptions,
    nuxt: nuxtOptions,
    tailwindcss: tailwindcssOptions,
    unocss: unocssOptions,
    // ---- Special File Type ----
    markdown: markdownOptions,
    jsonc: jsoncOptions,
    toml: tomlOptions,
    yml: ymlOptions,
  } = parseOptions(options);

  const configs: Config[][] = [];

  // ---- Ignores ----

  // gitignore
  if (gitignoreOptions) {
    if (isBoolean(gitignoreOptions)) {
      configs.push(gitignore());
    } else {
      configs.push(gitignore(gitignoreOptions));
    }
  }

  // ignores
  if (ignoresOptions) {
    if (isBoolean(ignoresOptions)) {
      configs.push(ignores());
    } else {
      configs.push(ignores(ignoresOptions));
    }
  }

  // ---- Languages ----

  // JavaScript
  if (javascriptOptions) {
    if (isBoolean(javascriptOptions)) {
      configs.push(javascript());
    } else {
      configs.push(javascript(javascriptOptions));
    }
  }

  // TypeScript
  if (typescriptOptions) {
    if (isBoolean(typescriptOptions)) {
      configs.push(typescript());
    } else {
      configs.push(typescript(typescriptOptions));
    }
  }

  // ---- Base ----

  // command
  if (commandOptions) {
    if (isBoolean(commandOptions)) {
      configs.push(command());
    } else {
      configs.push(command(commandOptions));
    }
  }

  // JSDoc
  if (jsdocOptions) {
    if (isBoolean(jsdocOptions)) {
      configs.push(jsdoc());
    } else {
      configs.push(jsdoc(jsdocOptions));
    }
  }

  // imports
  if (importsOptions) {
    if (isBoolean(importsOptions)) {
      configs.push(imports());
    } else {
      configs.push(imports(importsOptions));
    }
  }

  // unused imports
  if (unusedImportsOptions) {
    if (isBoolean(unusedImportsOptions)) {
      configs.push(unusedImports());
    } else {
      configs.push(unusedImports(unusedImportsOptions));
    }
  }

  if (barrelOptions) {
    if (isBoolean(barrelOptions)) {
      configs.push(barrel());
    } else {
      configs.push(barrel(barrelOptions));
    }
  }

  // Promise
  if (promiseOptions) {
    if (isBoolean(promiseOptions)) {
      configs.push(promise());
    } else {
      configs.push(promise(promiseOptions));
    }
  }

  // RegExp
  if (regexpOptions) {
    if (isBoolean(regexpOptions)) {
      configs.push(regexp());
    } else {
      configs.push(regexp(regexpOptions));
    }
  }

  // Node
  if (nodeOptions) {
    if (isBoolean(nodeOptions)) {
      configs.push(node());
    } else {
      configs.push(node(nodeOptions));
    }
  }

  // perfectionist
  if (perfectionistOptions) {
    if (isBoolean(perfectionistOptions)) {
      configs.push(perfectionist());
    } else {
      configs.push(perfectionist(perfectionistOptions));
    }
  }

  // unicorn
  if (unicornOptions) {
    if (isBoolean(unicornOptions)) {
      configs.push(unicorn());
    } else {
      configs.push(unicorn(unicornOptions));
    }
  }

  // ---- Frameworks ----

  // React
  if (reactOptions) {
    if (isBoolean(reactOptions)) {
      configs.push(react());
    } else {
      configs.push(react(reactOptions));
    }
  }

  // React Native
  if (reactNativeOptions) {
    if (isBoolean(reactNativeOptions)) {
      configs.push(reactNative());
    } else {
      configs.push(reactNative(reactNativeOptions));
    }
  }

  // Next
  if (nextOptions) {
    if (isBoolean(nextOptions)) {
      configs.push(next());
    } else {
      configs.push(next(nextOptions));
    }
  }

  // Vue
  if (vueOptions) {
    if (isBoolean(vueOptions)) {
      configs.push(vue());
    } else {
      configs.push(vue(vueOptions));
    }
  }

  // Nuxt
  if (nuxtOptions) {
    if (isBoolean(nuxtOptions)) {
      configs.push(nuxt());
    } else {
      configs.push(nuxt(nuxtOptions));
    }
  }

  // TailwindCSS
  if (tailwindcssOptions) {
    if (isBoolean(tailwindcssOptions)) {
      configs.push(tailwindcss());
    } else {
      configs.push(tailwindcss(tailwindcssOptions));
    }
  }

  // UnoCSS
  if (unocssOptions) {
    if (isBoolean(unocssOptions)) {
      configs.push(unocss());
    } else {
      configs.push(unocss(unocssOptions));
    }
  }

  // ---- Special File Type ----

  // Markdown
  if (markdownOptions) {
    if (isBoolean(markdownOptions)) {
      configs.push(markdown());
    } else {
      configs.push(markdown(markdownOptions));
    }
  }

  // JSONC
  if (jsoncOptions) {
    if (isBoolean(jsoncOptions)) {
      configs.push(jsonc());
    } else {
      configs.push(jsonc(jsoncOptions));
    }
  }

  // TOML
  if (tomlOptions) {
    if (isBoolean(tomlOptions)) {
      configs.push(toml());
    } else {
      configs.push(toml(tomlOptions));
    }
  }

  // YML
  if (ymlOptions) {
    if (isBoolean(ymlOptions)) {
      configs.push(yml());
    } else {
      configs.push(yml(ymlOptions));
    }
  }

  return combine(...configs, ...userConfigs);
}
