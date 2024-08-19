import { GLOB_JSX, GLOB_TSX } from "../../constants";
import { hasVite, hasRemix, hasNext } from "../../env";
import {
  pluginReactX,
  pluginReactDom,
  pluginReactHooksExtra,
  pluginReactNamingConvention,
  pluginReactHooks,
  pluginReactPerf,
  pluginReactRefresh,
} from "../plugins";
import type { Config, ReactOptions } from "../types";

export function react(options: ReactOptions = {}): Config[] {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    rules = {},
    typescriptFiles = [GLOB_TSX],
    typescriptRules = {},
    settings = {},
  } = options;
  return [
    {
      name: "react",
      files,
      plugins: {
        // @ts-expect-error not matched
        "react-x": pluginReactX,
        // @ts-expect-error not matched
        "react-dom": pluginReactDom,
        // @ts-expect-error not matched
        "react-hooks-extra": pluginReactHooksExtra,
        // @ts-expect-error not matched
        "react-naming-convention": pluginReactNamingConvention,
        "react-hooks": pluginReactHooks,
        "react-perf": pluginReactPerf,
        "react-refresh": pluginReactRefresh,
      },
      rules: {
        // https://github.com/Rel1cx/eslint-react/blob/v1.10.1/packages/plugins/eslint-plugin-react-x/README.md
        "react-x/ensure-forward-ref-using-ref": "warn",
        "react-x/no-access-state-in-setstate": "error",
        "react-x/no-array-index-key": "warn",
        "react-x/no-children-count": "warn",
        "react-x/no-children-for-each": "warn",
        "react-x/no-children-map": "warn",
        "react-x/no-children-only": "warn",
        "react-x/no-children-to-array": "warn",
        "react-x/no-clone-element": "warn",
        "react-x/no-comment-textnodes": "warn",
        "react-x/no-component-will-mount": "error",
        "react-x/no-component-will-receive-props": "error",
        "react-x/no-component-will-update": "error",
        "react-x/no-create-ref": "error",
        "react-x/no-default-props": "error",
        "react-x/no-direct-mutation-state": "error",
        "react-x/no-duplicate-key": "error",
        "react-x/no-implicit-key": "warn",
        "react-x/no-missing-key": "error",
        "react-x/no-nested-components": "warn",
        "react-x/no-prop-types": "error",
        "react-x/no-redundant-should-component-update": "error",
        "react-x/no-set-state-in-component-did-mount": "warn",
        "react-x/no-set-state-in-component-did-update": "warn",
        "react-x/no-set-state-in-component-will-update": "warn",
        "react-x/no-string-refs": "error",
        "react-x/no-unsafe-component-will-mount": "warn",
        "react-x/no-unsafe-component-will-receive-props": "warn",
        "react-x/no-unsafe-component-will-update": "warn",
        "react-x/no-unstable-context-value": "error",
        "react-x/no-unstable-default-props": "error",
        "react-x/no-unused-class-component-members": "warn",
        "react-x/no-unused-state": "warn",

        // https://github.com/Rel1cx/eslint-react/blob/v1.10.1/packages/plugins/eslint-plugin-react-dom/README.md
        "react-dom/no-children-in-void-dom-elements": "warn",
        "react-dom/no-dangerously-set-innerhtml": "warn",
        "react-dom/no-dangerously-set-innerhtml-with-children": "error",
        "react-dom/no-find-dom-node": "error",
        "react-dom/no-missing-button-type": "warn",
        "react-dom/no-missing-iframe-sandbox": "warn",
        "react-dom/no-namespace": "error",
        "react-dom/no-render-return-value": "error",
        "react-dom/no-script-url": "warn",
        "react-dom/no-unsafe-iframe-sandbox": "warn",
        "react-dom/no-unsafe-target-blank": "warn",

        // https://github.com/Rel1cx/eslint-react/blob/v1.10.1/packages/plugins/eslint-plugin-react-hooks-extra/README.md
        "react-hooks-extra/no-direct-set-state-in-use-effect": "warn",
        "react-hooks-extra/no-direct-set-state-in-use-layout-effect": "warn",
        "react-hooks-extra/prefer-use-state-lazy-initialization": "warn",

        // https://github.com/Rel1cx/eslint-react/blob/v1.10.1/packages/plugins/eslint-plugin-react-naming-convention/README.md
        "naming-convention/filename-extension": ["warn", "as-needed"],
        "naming-convention/use-state": "warn",

        // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
        // eslint-plugin-react-hooks v4.6.2
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        // https://github.com/cvazac/eslint-plugin-react-perf/tree/35e9912004da57880939edd4a1ca202740157c66
        // eslint-plugin-react-perf v3.3.2
        "react-perf/jsx-no-new-object-as-prop": "error",
        "react-perf/jsx-no-new-array-as-prop": "error",
        "react-perf/jsx-no-new-function-as-prop": "error",

        // https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/v0.4.9
        "react-refresh/only-export-components": [
          "warn",
          {
            allowExportNames: [
              ...(hasRemix
                ? ["meta", "links", "headers", "loader", "action"]
                : []),
              ...(hasNext
                ? [
                    "config",
                    "generateStaticParams",
                    "metadata",
                    "generateMetadata",
                    "viewport",
                    "generateViewport",
                  ]
                : []),
            ],
            allowConstantExport: hasVite,
          },
        ],

        ...rules,
      },
      settings: {
        ...settings,
      },
    },
    {
      name: "react-typescript",
      files: typescriptFiles,
      rules: {
        ...typescriptRules,
      },
    },
  ];
}
