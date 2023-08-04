# @modyqyw/fabric

[![npm](https://img.shields.io/npm/v/@modyqyw/fabric)](https://www.npmjs.com/package/@modyqyw/fabric)
[![GitHub license](https://img.shields.io/github/license/ModyQyW/fabric)](https://github.com/ModyQyW/fabric/blob/main/LICENSE)

English | [简体中文](./README.zh-CN.md)

Opinionated shareable specification for different JavaScript/TypeScript projects.

Requires:

- Latest Node LTS
- Latest package manager (npm / yarn / pnpm)
- Recommend to set `shamefully-hoist=true` in `.npmrc` or use `--shamefully-hoist` when using pnpm 8
  - See [pnpm - shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist)
  - Use this to avoid phantom dependencies caused by the lack of specification of some NPM packages (using packages that are not defined in `package.json`)
- Recommend to set `nodeLinker: 'node-modules'` in `.yarnrc.yml` when using yarn 3
  - See [yarn - nodeLinker](https://yarnpkg.com/configuration/yarnrc#nodeLinker)
  - Use this to avoid breaking existing projects
- Use new JSX transform and hooks for React projects
- Use Composition API for Vue projects

Using `npm` below. Check [nrm](https://github.com/Pana/nrm) and [npmmirror](https://npmmirror.com/) for mirror support.

## Usage

```sh
# locally
npm install -D @modyqyw/fabric@8

# globally
npm install --location=global @modyqyw/fabric@8
```

See more about versions in [node-semver](https://github.com/npm/node-semver).

### Naming

Naming should be simple and clear but it is hardly be checked by linters. So following an existing specification is a good choice.

- For JavaScript / TypeScript
  - [kettannaito/naming-cheatsheet](https://github.com/kettanaito/naming-cheatsheet)
- For CSS / SCSS
  - [BEM](http://getbem.com/)
  - [CSS Modules](https://github.com/css-modules/css-modules)
  - [OOCSS](https://github.com/stubbornella/oocss/wiki)
  - [ACSS](https://css-tricks.com/lets-define-exactly-atomic-css/)
  - [SMACSS](http://smacss.com/)
- Helpful Open Source Projects
  - [bootstrap](https://getbootstrap.com/)
  - [tailwindcss](https://tailwindcss.com/)
  - [mui](https://mui.com/)
  - [antd](https://ant.design/)
  - [vuetify](https://vuetifyjs.com/)
  - [element-plus](https://element-plus.org/)

### Git

Learn about [Git](https://git-scm.com/doc), [Git flow](https://nvie.com/posts/a-successful-git-branching-model/), [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow), [GitLab flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) and [Gif LFS](https://git-lfs.github.com/).

```sh
git config --global core.autocrlf false
git config --global core.ignorecase false
git config --global init.defaultBranch main
```

For SSH keys, check [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh), which also works for other git systems like [GitLab](https://gitlab.com/).

A `.gitignore` example [here](./.gitignore).

### EditorConfig

Learn about [EditorConfig](https://editorconfig.org/).

Set up `.editorconfig`.

```sh
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

```

### tsconfig.json

Learn about [tsconfig.json](https://aka.ms/tsconfig.json).

In most cases you should consider using the `tsconfig.json` that comes with the framework or library. if they don't provide it, [tsconfig/bases](https://github.com/tsconfig/bases) is a good choice.

### Prettier

Learn about [Prettier](https://prettier.io/).

```sh
npm install -D prettier@3
```

Set up `.prettierrc.cjs`.

```js
module.exports = {
  ...require('@modyqyw/fabric/prettier'),
};
```

### ESLint

Learn about [ESLint](https://eslint.org/).

```sh
npm install -D eslint@8 @babel/core@7 @babel/eslint-parser@7
```

Additional dependencies are needed if you are using TypeScript.

```sh
npm install -D typescript@5 @typescript-eslint/eslint-plugin@6 @typescript-eslint/parser@6
```

Set up `.eslintrc.cjs`.

```js
module.exports = {
  extends: [require.resolve('@modyqyw/fabric/eslint')],
};
```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  "scripts": {
    "lint": "npm run lint:eslint",
    "lint:eslint": "eslint . --fix --cache --ignore-path=.gitignore"
  }
}
```

### Stylelint

Learn about [Stylelint](https://stylelint.io/).

```sh
npm install -D stylelint@15
```

Set up `.stylelintrc.cjs`.

```js
module.exports = {
  extends: ['@modyqyw/fabric/stylelint'],
};
```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  "scripts": {
    "lint": "npm run lint:stylelint",
    "lint:stylelint": "stylelint \"./**/*.{css,scss,vue}\" --fix --cache --ignore-path=.gitignore"
  }
}
```

### Markdownlint

Learn about [Markdown](https://commonmark.org/) and [Markdownlint](https://github.com/DavidAnson/markdownlint).

```sh
npm install -D markdownlint-cli
```

Set up `.markdownlint.json`.

```json
{
  "MD001": false,
  "MD003": false,
  "MD013": false,
  "MD022": false,
  "MD024": false,
  "MD025": false,
  "MD033": false,
  "MD036": false,
  "MD050": false
}
```

Set up `package.json`. Use `.gitignore` as the ignore pattern file here.

```json
{
  "scripts": {
    "lint": "npm run lint:markdownlint",
    "lint:markdownlint": "markdownlint . --fix --ignore-path=.gitignore"
  }
}
```

You may want to ignore `CHANGELOG.md` if it is generated by some tools.

```json
{
  "scripts": {
    "lint": "npm run lint:markdownlint",
    "lint:markdownlint": "markdownlint . --fix --ignore=CHANGELOG.md --ignore-path=.gitignore"
  }
}
```

### Commitlint

Learn about [Commitlint](https://commitlint.js.org/) and [Conventional Commits](https://www.conventionalcommits.org/).

```sh
npm install -D @commitlint/cli@17 @commitlint/config-conventional@17 ts-node@10
```

Set up `.commitlintrc.cjs`.

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

### Commitizen

Learn about [Commitizen](https://commitizen-tools.github.io/commitizen/).

```sh
npm install -D commitizen@4 @commitlint/prompt@17
```

Set up `package.json`.

```json
{
  "scripts": {
    "commit": "git-cz"
  }
}
```

Set up `.czrc`.

```json
{
  "path": "@commitlint/prompt"
}
```

### Publint

Learn about [Publint](https://publint.dev/).

```sh
npm install -D publint@0.1
```

Just run `publint` to check your library.

### LintStaged

Learn about [LintStaged](https://github.com/okonet/lint-staged).

```sh
npm install -D lint-staged@13 sort-package-json@2
```

Set up `.lintstagedrc.cjs`.

```js
module.exports = {
  'package.json': 'sort-package-json',
  '*.md': 'markdownlint --fix --ignore-path=.gitignore',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,json,jsonc,json5,yaml,yml}': 'eslint --fix --cache --ignore-path=.gitignore',
  '*.{css,scss,vue}': 'stylelint --fix --cache --ignore-path=.gitignore',
};
```

You may want to ignore `CHANGELOG.md` if it is generated by some tools.

```js
module.exports = {
  'package.json': 'sort-package-json',
  '*.md': 'markdownlint --fix --ignore=CHANGELOG.md --ignore-path=.gitignore',
  '*.{js,cjs,mjs,jsx,ts,cts,mts,tsx,vue,json,jsonc,json5,yaml,yml}': 'eslint --fix --cache --ignore-path=.gitignore',
  '*.{css,scss,vue}': 'stylelint --fix --cache --ignore-path=.gitignore',
};
```

### SimpleGitHooks

Learn about [SimpleGitHooks](https://github.com/toplenboren/simple-git-hooks). `Husky` and `SimpleGitHooks` you only need one.

```sh
npm install -D is-ci@3 simple-git-hooks@2
```

Set up `package.json`.

```json
{
  "scripts": {
    "prepare": "is-ci || simple-git-hooks"
  }
}
```

Set up `.simple-git-hooks.cjs`.

```js
module.exports = {
  "pre-commit": "npx lint-staged",
  "commit-msg": "npx commitlint --edit ${1}",
};

```

### Husky

Learn about [Husky](https://github.com/typicode/husky). `Husky` and `SimpleGitHooks` you only need one.

```sh
npm install -D is-ci@3 husky@8

npx husky install

```

Set up `package.json`.

```json
{
  "scripts": {
    "prepare": "is-ci || husky install"
  }
}
```

Set up `.husky/commit-msg` hook.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1

```

Set up `.husky/pre-commit` hook.

```sh
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install lint-staged

```

Finally use `chmod`.

```sh
chmod +x .git/hooks/*
chmod +x .husky/*
```

### Deploy

Experience has proven that automation is the best option. You may want to try packages below, sorted according to alphabetical order.

- [auto-changelog](https://github.com/CookPete/auto-changelog)
- [bumpp](https://github.com/antfu/bumpp) - We are using it.
- [changelogen](https://github.com/unjs/changelogen)
- [changelogithub](https://github.com/antfu/changelogithub)
- [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) - 我们在使用这个
- [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) - We are using it.
- [keep-a-changelog](https://github.com/oscarotero/keep-a-changelog)
- [np](https://github.com/sindresorhus/np)
- [release](https://github.com/vercel/release)
- [release-it](https://github.com/release-it/release-it)
- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)

## VSCode

- Install plugins.
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
  - [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - For Vue 3 and Vue 2, extra configs required if for Vue 2. [Takeover Mode](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode) is recommended.
  - [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) - For UnoCSS. Use [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) if you prefer TailwindCSS.
- Set up `Settings.json`.

```json
{
  "css.validate": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // "editor.formatOnSave": true, // enable if you need this
  "editor.rulers": [{ "column": 100 }],
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "svelte",
    "yaml",
    "json",
    "jsonc",
    "json5"
  ],
  "files.eol": "\n",
  "files.associations": {
    "*.wxml": "html",
    "*.wxs": "javascript",
    "*.wxss": "css",
    "*.axml": "html",
    "*.sjs": "javascript",
    "*.acss": "css",
    "*.swan": "html",
    "*.ttml": "html",
    "*.ttss": "css",
    "*.jxml": "html",
    "*.jxss": "css",
    "*.wpy": "vue",
    "*.json": "jsonc",
    "*.json5": "jsonc",
    "*.nvue": "vue",
    "*.uvue": "vue",
    "*.ux": "vue"
  },
  "scss.validate": false,
  "stylelint.snippet": ["css", "scss", "vue"],
  "stylelint.validate": ["css", "scss", "vue"],
  // enable this if you need
  // "[html]": {
  //   "editor.formatOnSave": true
  // },
  "[javascript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[javascriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescript]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescriptreact]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[css]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[scss]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    }
  },
  "[vue]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    }
  },
  "[json]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[jsonc]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[json5]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[markdown]": {
    // "editor.formatOnSave": true, // enable this if you need
    "editor.codeActionsOnSave": {
      "source.fixAll.markdownlint": true
    }
  },
  "[yaml]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[yml]": {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
}
```

## Examples

See [dependency graph](https://github.com/ModyQyW/fabric/network/dependents?package_id=UGFja2FnZS0xNTg3ODMzNDM2).

## Acknowledge

Sorted according to alphabetical order.

- [airbnb/css](https://github.com/airbnb/css)
- [airbnb/javascript](https://github.com/airbnb/javascript)
- [AlloyTeam/eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
- [antfu/eslint-config](https://github.com/antfu/eslint-config)
- [basarat/typescript-book](https://github.com/basarat/typescript-book)
- [google/styleguide](https://google.github.io/styleguide)
- [mdo/code-guide](https://github.com/mdo/code-guide)
- [remix-run/remix/remix-eslint-config](https://github.com/remix-run/remix/tree/main/packages/remix-eslint-config)
- [standard/standard](https://github.com/standard/standard)
- [vercel/style-guide](https://github.com/vercel/style-guide)

## License

[MIT](./LICENSE)

Copyright (c) 2020-present ModyQyW

## [Sponsors](https://github.com/ModyQyW/sponsors)

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/ModyQyW/sponsors/sponsorkit/sponsors.svg"/>
  </a>
</p>
