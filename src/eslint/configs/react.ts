import { GLOB_JSX, GLOB_TSX } from "../../constants.ts";
import { hasVite, hasRemix, hasNext } from "../../env.ts";
import {
  parserBabel,
  parserTypeScript,
  pluginReactX,
  pluginReactDom,
  pluginReactWebApi,
  pluginReactHooksExtra,
  pluginReactNamingConvention,
  pluginReactHooks,
  pluginReactPerf,
  pluginReactRefresh,
} from "../plugins.ts";
import type { Config, ReactOptions } from "../types.ts";

export function react(options: ReactOptions = {}): Config[] {
  const {
    files = [GLOB_JSX, GLOB_TSX],
    rules = {},
    parserOptions = {},
    languageOptions = {},
    typescriptFiles = [GLOB_TSX],
    typescriptRules = {},
    typescriptParserOptions = {},
    typescriptLanguageOptions = {},
    typeCheck = true,
    settings = {},
  } = options;
  return [
    {
      name: "frameworks/react",
      files,
      languageOptions: {
        parser: parserBabel,
        parserOptions: {
          babelOptions: {
            babelrc: false,
            configFile: false,
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
          ecmaFeatures: {
            globalReturn: false,
            jsx: true,
          },
          ecmaVersion: "latest",
          requireConfigFile: false,
          sourceType: "module",
          ...parserOptions,
        },
        ...languageOptions,
      },
      plugins: {
        "react-x": pluginReactX,
        "react-dom": pluginReactDom,
        "react-web-api": pluginReactWebApi,
        "react-hooks-extra": pluginReactHooksExtra,
        "react-naming-convention": pluginReactNamingConvention,
        "react-hooks": pluginReactHooks,
        "react-perf": pluginReactPerf,
        "react-refresh": pluginReactRefresh,
      },
      rules: {
        // https://github.com/Rel1cx/eslint-react/blob/v1.16.1/packages/plugins/eslint-plugin-react-x/README.md
        "react-x/ensure-forward-ref-using-ref": "warn",
        "react-x/jsx-no-duplicate-props": "warn",
        "react-x/jsx-uses-vars": "warn",
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

        // https://github.com/Rel1cx/eslint-react/blob/v1.16.1/packages/plugins/eslint-plugin-react-dom/README.md
        "react-dom/no-children-in-void-dom-elements": "warn",
        "react-dom/no-dangerously-set-innerhtml-with-children": "error",
        "react-dom/no-dangerously-set-innerhtml": "warn",
        "react-dom/no-find-dom-node": "error",
        "react-dom/no-missing-button-type": "warn",
        "react-dom/no-missing-iframe-sandbox": "warn",
        "react-dom/no-namespace": "error",
        "react-dom/no-render-return-value": "error",
        "react-dom/no-script-url": "warn",
        "react-dom/no-unknown-property": "warn",
        "react-dom/no-unsafe-iframe-sandbox": "warn",
        "react-dom/no-unsafe-target-blank": "warn",

        // https://github.com/Rel1cx/eslint-react/blob/v1.16.1/packages/plugins/eslint-plugin-react-web-api/README.md
        "react-web-api/no-leaked-timeout": "error",
        "react-web-api/no-leaked-interval": "error",
        "react-web-api/no-leaked-event-listener": "error",
        "react-web-api/no-leaked-resize-observer": "error",

        // https://github.com/Rel1cx/eslint-react/blob/v1.16.1/packages/plugins/eslint-plugin-react-hooks-extra/README.md
        "react-hooks-extra/no-redundant-custom-hook": "warn",
        "react-hooks-extra/no-direct-set-state-in-use-effect": "warn",
        "react-hooks-extra/prefer-use-state-lazy-initialization": "warn",

        // https://github.com/Rel1cx/eslint-react/blob/v1.16.1/packages/plugins/eslint-plugin-react-naming-convention/README.md
        "react-naming-convention/filename-extension": ["warn", "as-needed"],
        "react-naming-convention/use-state": "warn",

        // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
        // eslint-plugin-react-hooks v5.0.0
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

        // https://github.com/cvazac/eslint-plugin-react-perf/commit/9bfa930661a23218f5460ebd39d35d76ccdb5724
        // eslint-plugin-react-perf v3.3.3
        "react-perf/jsx-no-new-object-as-prop": "error",
        "react-perf/jsx-no-new-array-as-prop": "error",
        "react-perf/jsx-no-new-function-as-prop": "error",

        // https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/v0.4.14
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
      name: "frameworks/react/typescript",
      files: typescriptFiles,
      languageOptions: {
        parser: parserTypeScript,
        ...(typeCheck
          ? {
              parserOptions: {
                projectService: {
                  allowDefaultProject: ["*.js", "*.config.*"],
                },
                ...typescriptParserOptions,
              },
            }
          : {
              parserOptions: {
                ...typescriptParserOptions,
              },
            }),
        ...typescriptLanguageOptions,
      },
      rules: {
        "react-x/jsx-no-duplicate-props": "off",
        "react-x/jsx-uses-vars": "warn",
        "react-dom/no-unknown-property": "off",

        ...(typeCheck
          ? {
              "react-x/no-leaked-conditional-rendering": "warn",
            }
          : {}),

        ...typescriptRules,
      },
    },
  ];
}
