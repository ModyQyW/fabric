# Ensure NPM Packages Compatibility

NPM packages, or JavaScript libraries, may run in all kinds of environments. If it doesn't support certain environments, then users will complain or even stop using it. This is also why it is important to ensure the widest possible compatibility across environments.

The [The Modern Guide to Packaging your JavaScript Library](https://github.com/frehner/modern-guide-to-packaging-js-library) is a good reference for this, providing things that apply to every library and bundler (or lack of bundler).

Based on this, you can use [publint](https://github.com/bluwy/publint) to lint your NPM packages compatibility, or [its online version](https://publint.dev/).

```shell
# Lint your packages
# If you need to package it, you need to do it first
$ npx publint

# Lint your project's dependencies based on package.json
$ npx publint deps
```

Additionally, [@arethetypeswrong/cli](https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/packages/cli/README.md) analyzes npm package contents for issues with their TypeScript types, particularly ESM-related module resolution issues, and you can also use [its online version](https://arethetypeswrong.github.io/).

```shell
# Lint your packages
# If you need to package it, you need to do it first
npx @arethetypeswrong/cli

# Also try the following command
npx @arethetypeswrong/cli --pack .
```
