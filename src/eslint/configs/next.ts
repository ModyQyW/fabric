import { GLOB_JSX, GLOB_TSX } from "../../constants.ts";
import { pluginNext } from "../plugins.ts";
import type { Config, NextOptions } from "../types.ts";

export function next(options: NextOptions = {}): Config[] {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    rules = {},
    typescriptFiles = [GLOB_TSX],
    typescriptRules = {},
  } = options;
  return [
    {
      name: "next",
      files,
      plugins: {
        "@next/next": pluginNext,
      },
      rules: {
        // https://nextjs.org/docs/messages/google-font-display
        "@next/next/google-font-display": "warn",

        // https://nextjs.org/docs/messages/google-font-preconnect
        "@next/next/google-font-preconnect": "warn",

        // https://nextjs.org/docs/messages/inline-script-id
        "@next/next/inline-script-id": "error",

        // https://nextjs.org/docs/messages/next-script-for-ga
        "@next/next/next-script-for-ga": "warn",

        // Handled by ESLint globals.
        // '@next/next/no-assign-module-variable': 'error',

        // https://nextjs.org/docs/messages/no-async-client-component
        "@next/next/no-async-client-component": "warn",

        // https://nextjs.org/docs/messages/no-before-interactive-script-outside-document
        "@next/next/no-before-interactive-script-outside-document": "warn",

        // https://nextjs.org/docs/messages/no-css-tags
        "@next/next/no-css-tags": "warn",

        // https://nextjs.org/docs/messages/no-document-import-in-page
        "@next/next/no-document-import-in-page": "error",

        // https://nextjs.org/docs/messages/no-duplicate-head
        "@next/next/no-duplicate-head": "error",

        // https://nextjs.org/docs/messages/no-head-element
        "@next/next/no-head-element": "warn",

        // https://nextjs.org/docs/messages/no-head-import-in-document
        "@next/next/no-head-import-in-document": "error",

        // https://nextjs.org/docs/messages/no-html-link-for-pages
        "@next/next/no-html-link-for-pages": "error",

        // https://nextjs.org/docs/messages/no-img-element
        "@next/next/no-img-element": "warn",

        // https://nextjs.org/docs/messages/no-page-custom-font
        "@next/next/no-page-custom-font": "warn",

        // https://nextjs.org/docs/messages/no-script-component-in-head
        "@next/next/no-script-component-in-head": "error",

        // https://nextjs.org/docs/messages/no-styled-jsx-in-document
        "@next/next/no-styled-jsx-in-document": "warn",

        // https://nextjs.org/docs/messages/no-sync-scripts
        "@next/next/no-sync-scripts": "error",

        // https://nextjs.org/docs/messages/no-title-in-document-head
        "@next/next/no-title-in-document-head": "warn",

        "@next/next/no-typos": "warn",

        // https://nextjs.org/docs/messages/no-unwanted-polyfillio
        "@next/next/no-unwanted-polyfillio": "error",

        ...rules,
      },
    },
    {
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
