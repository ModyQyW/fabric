# Getting Started

Want to know about it first? Of course! See [here](./what-is-modyqyw-fabric.md)!

## Prerequisites

- Good network

  - If you can't access GitHub smoothly, try [set Hosts](https://github.com/ineo6/hosts) or use scientific internet.
  - If you can't access NPM smoothly, try setting up mirroring using [nrm](https://github.com/Pana/nrm), setting up [mirror](https://npmmirror.com/) manually, or using scientific internet.

- [Node.js](https://nodejs.org/) v18 or higher

  - Use [fnm](https://github.com/Schniz/fnm) or [volta](https://volta.sh/) to manage Node.js versions is recommended.
  - The LTS version (the version where X is an even number in X.Y.Z) is recommended.
  - Use the newest version is recommended.

- Package manager

  - [pnpm](https://pnpm.io) is recommended.
  - Use [corepack](https://github.com/nodejs/corepack) to enable pnpm is recommended.

  ```shell
  # corepack is included with Node.js and does not need to be installed manually
  corepack prepare --all --activate && corepack enable
  ```

  ::: tip Tips for yarn
  It is a good idea to set `nodeLinker: "node_modules"` in `.yarnrc.yml`, as this effectively avoids breaking existing projects and also avoids phantom dependencies.

  You don't need to set for yarn v1.
  :::

  ::: tip Tips for pnpm
  It is a good idea to set `shamefully-hoist=true` in `.npmrc`, as this effectively avoids breaking existing projects and also avoids phantom dependencies.
  :::

- A new project

  - @modyqyw/fabric does not consider support for older projects. You can try to access it gradually, but there is no guarantee of absolute success.
  - Use the Composition API if you want to develop Vue projects.
  - Use the new JSX transformations and hooks if you want to develop React projects.

- A Unix-like terminal
  - If you're using Windows, consider using Git Bash (which comes with your Git installation).
  - If you are using Linux or macOS, consider using the terminal that comes with your system.

## Installation

Use the terminal to open the corresponding project directory and execute the command to install the dependencies.

```shell
pnpm install @modyqyw/fabric
```

That's it! Next, you can configure the project to suit your needs.

::: tip Tips for usage
This library does not provide out-of-the-box configurations for LESS, Svelte, Lit, Angular, etc. If you have a need for it, feel free to PR. And don't forget to maintain them! 👏
:::
