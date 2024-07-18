#!/usr/bin/env node
import { accessSync, mkdirSync, readFileSync } from 'node:fs';
import { unlink, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { installPackage } from '@antfu/install-pkg';
import { checkbox, confirm, select } from '@inquirer/prompts';
import { ListrInquirerPromptAdapter } from '@listr2/prompt-adapter-inquirer';
import { Command } from 'commander';
import consola from 'consola';
import { defu } from 'defu';
import fg from 'fast-glob';
import {
  DefaultRenderer,
  Listr,
  type ListrTaskWrapper,
  SimpleRenderer,
} from 'listr2';
import { isPackageExists } from 'local-pkg';
import sortObjectKeys from 'sort-object-keys';
import sortPackageJson from 'sort-package-json';
import updateNotifier from 'update-notifier';
import packageJson from '../package.json';

updateNotifier({ pkg: packageJson }).notify();

interface Ctx {
  currentMajor: number;
  currentVersion: string;
  functions: string[];
  ltsMajor: number;
  ltsVersion: string;
  nodeVersions: {
    lts: boolean;
    version: string;
  }[];
  vscode: boolean;
}

const program = new Command()
  .name(packageJson.name)
  .description(packageJson.description)
  .version(packageJson.version)
  .argument('[dir]', 'dir to setup @modyqyw/fabric', '.')
  .option('--prettier', 'setup Prettier')
  .option('--eslint', 'setup ESLint')
  .option('--oxlint', 'setup oxlint')
  .option('--stylelint', 'setup Stylelint')
  .option('--markdownlint', 'setup markdownlint')
  .option('--biome', 'setup Biome')
  .option('--tsc', 'setup tsc')
  .option('--commitlint', 'setup commitlint')
  .option('--lint-staged', 'setup lint-staged')
  .option('--simple-git-hooks', 'setup simple-git-hooks')
  .option('--editor-config', 'setup .editorconfig')
  .option('--vscode', 'setup .vscode')
  .option('-a, --all', 'setup all functions')
  .option('-c, --clean', 'clean legacy setup')
  .parse();
const args = program.args;
const opts = program.opts();
// console.log('args', args);
// console.log('opts', opts);

const dir = args[0] || '.';
const cwd = process.cwd();
function resolvePath(...paths: string[]) {
  return resolve(cwd, dir, ...paths);
}
const packageJsonPath = resolvePath('package.json');
const packageJsonContent = readFileSync(packageJsonPath, 'utf8');
const packageJsonObject = JSON.parse(packageJsonContent);
const packageJsonEof = '\n';
const packageJsonIndent = '  ';
// const isESM = packageJsonObject.type === 'module';

const functionOptions: {
  description: string;
  field?: string;
  name: string;
  packages?: string[];
  path?: string;
  patterns?: string[];
  scripts?: Record<string, string>;
  template?: string;
  value: string;
  vscodeRecommendations?: string[];
  vscodeSettings?: Record<string, any>;
}[] = [
  {
    description:
      'EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.',
    name: 'EditorConfig',
    path: '.editorconfig',
    patterns: ['.editorconfig'],
    template: `root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
`,
    value: 'editorConfig',
    vscodeRecommendations: ['EditorConfig.EditorConfig'],
  },
  {
    description:
      "Prettier is a widely adopted code formatter with good support for JavaScript / TypeScript / JSX / TSX / CSS / SCSS / Vue, and it's my top pick for formatters.",
    field: 'prettier',
    name: 'Prettier',
    packages: ['prettier'],
    path: 'prettier.config.mjs',
    patterns: ['.prettierrc*', 'prettier.config.*'],
    scripts: {
      format:
        'prettier . "!**/package-lock.json*" "!**/yarn.lock" "!**/pnpm-lock.yaml" --ignore-unknown --write --cache --log-level=warn',
    },
    template: `import { prettier } from '@modyqyw/fabric';

export default prettier();
`,
    value: 'prettier',
    vscodeRecommendations: ['esbenp.prettier-vscode'],
    vscodeSettings: {
      // 指定默认代码格式化器为 Prettier
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      // 保存自动格式化
      'editor.formatOnSave': true,
      // 启动 Prettier
      'prettier.enable': true,
    },
  },
  {
    description: 'ESLint is a widely adopted linter, mainly for script files.',
    field: 'eslintConfig',
    name: 'ESLint',
    packages: ['eslint'],
    path: 'eslint.config.mjs',
    patterns: ['.eslintrc*', 'eslint.config.*'],
    scripts: {
      'lint:eslint': 'eslint . --fix --cache',
    },
    template: `import { eslint } from '@modyqyw/fabric';

export default eslint();
`,
    value: 'eslint',
    vscodeRecommendations: ['dbaeumer.vscode-eslint'],
    vscodeSettings: {
      // 启用 ESLint 平面配置
      'eslint.experimental.useFlatConfig': true, // < 3.0.10
      'eslint.useFlatConfig': true, // >= 3.0.10
      // ESLint 检查的语言
      'eslint.validate': [
        'javascript',
        'javascriptreact',
        'typescript',
        'typescriptreact',
        'vue',
        'markdown',
        'json',
        'jsonc',
        'yaml',
      ],
      // JavaScript、JSX、TypeScript、TypeScript JSX、Vue、markdown、JSON、JSONC、YAML 手动保存后 ESLint 自动修复
      '[javascript][javascriptreact][typescript][typescriptreact][vue][markdown][json][jsonc][yaml]':
        {
          'editor.codeActionsOnSave': {
            'source.fixAll.eslint': 'explicit',
          },
        },
    },
  },
  {
    description:
      'oxlint is an emerging linter that requires no configuration by default and is mainly used for script files.',
    name: 'oxlint',
    packages: ['oxlint'],
    scripts: {
      'lint:oxlint': 'oxlint --fix',
    },
    value: 'oxlint',
  },
  {
    description:
      'Stylelint is a widely adopted linter, mainly for style files.',
    field: 'stylelint',
    name: 'Stylelint',
    packages: ['stylelint'],
    path: 'stylelint.config.mjs',
    patterns: ['.stylelintrc*', 'stylelint.config.*'],
    scripts: {
      'lint:stylelint':
        'stylelint "./**/*.{css,scss,vue}" --fix --cache --aei --ignore-path=.gitignore',
    },
    template: `import { stylelint } from '@modyqyw/fabric';

export default stylelint();
`,
    value: 'stylelint',
    vscodeRecommendations: ['stylelint.vscode-stylelint'],
    vscodeSettings: {
      // 禁用内置的 CSS 检查
      'css.validate': false,
      // 禁用内置的 LESS 检查
      'less.validate': false,
      // 禁用内置的 SCSS 检查
      'scss.validate': false,
      // 启用 Stylelint 代码片段的语言
      'stylelint.snippet': ['css', 'scss', 'vue'],
      // Stylelint 检查的语言
      'stylelint.validate': ['css', 'scss', 'vue'],
      // CSS、SCSS、Vue 手动保存后 Stylelint 自动修复
      '[css][scss][vue]': {
        'editor.codeActionsOnSave': {
          'source.fixAll.stylelint': 'explicit',
        },
      },
    },
  },
  {
    description: 'markdownlint is the linter for markdown file.',
    field: 'markdownlint',
    name: 'markdownlint',
    packages: ['markdownlint-cli'],
    path: '.markdownlint.json',
    patterns: ['.markdowlintrc*', '.markdownlint.*', 'markdownlint.config.*'],
    scripts: {
      'lint:markdownlint': 'markdownlint . --fix --ignore-path=.gitignore',
    },
    template: `{
  "$schema": "https://raw.githubusercontent.com/DavidAnson/markdownlint/main/schema/markdownlint-config-schema.json",
  "extends": "@modyqyw/fabric/markdownlint.json"
}
`,
    value: 'markdownlint',
    vscodeRecommendations: ['DavidAnson.vscode-markdownlint'],
    vscodeSettings: {
      // markdown 手动保存后 markdownlint 自动修复
      '[markdown]': {
        'editor.codeActionsOnSave': {
          'source.fixAll.markdownlint': 'explicit',
        },
      },
    },
  },
  {
    description:
      'Biome is an all-in-one high-performance toolchain for web projects, aimed to provide functionalities to maintain them. It is a performant linter and a fast formatter.',
    name: 'Biome',
    packages: ['@biomejs/biome'],
    patterns: ['biome.json'],
    scripts: {
      check: '@biomejs/biome check --write',
    },
    template: `{
  "extends": "@modyqyw/fabric/biome.json"
}
`,
    value: 'biome',
    vscodeRecommendations: ['biomejs.biome'],
    vscodeSettings: {
      // 手动保存后 Biome 自动修复
      'editor.codeActionsOnSave': {
        'quickfix.biome': 'explicit',
        'source.organizeImports.biome': 'explicit',
      },
      // 指定默认代码格式化器为 Biome
      'editor.defaultFormatter': 'biomejs.biome',
      // 保存自动格式化
      'editor.formatOnSave': true,
    },
  },
  {
    // TODO: support monorepo
    description: 'tsc is the official type checker that comes with TypeScript.',
    name: 'tsc',
    packages: [
      'typescript',
      isPackageExists('vue') ? 'vue-tsc' : undefined,
    ].filter(Boolean) as string[],
    scripts: {
      'type-check':
        packageJsonObject?.scripts?.['type-check'] ??
        (isPackageExists('vue') ? 'vue-tsc --noEmit' : 'tsc --noEmit'),
    },
    value: 'tsc',
  },
  {
    description:
      'commitlint is a widely adopted Git tool that lints commit messages and helps your team adhere to a commit convention.',
    field: 'commitlint',
    name: 'commitlint',
    packages: ['@commitlint/cli'],
    path: 'commitlint.config.mjs',
    patterns: ['.commitlintrc*', 'commitlint.config.*'],
    template: `import { commitlint } from '@modyqyw/fabric';

export default commitlint();
`,
    value: 'commitlint',
  },
  {
    description:
      'lint-staged is a widely adopted Git tool that executes commands against staged git files to prevent erroneous code from entering the repository.',
    field: 'lint-staged',
    name: 'lint-staged',
    packages: ['lint-staged'],
    path: 'lint-staged.config.mjs',
    patterns: ['.lintstagedrc*', 'lint-staged.config.*'],
    template: `import { lintStaged } from '@modyqyw/fabric';

export default lintStaged();
`,
    value: 'lintStaged',
  },
  {
    description:
      'simple-git-hooks is a widely adopted Git tool that helps you manage Git hooks easily.',
    field: 'simple-git-hooks',
    name: 'simple-git-hooks',
    packages: ['simple-git-hooks', 'is-ci', 'esbuild-register'],
    path: '.simple-git-hooks.cjs',
    patterns: ['.simple-git-hooks*', 'simple-git-hooks.*'],
    scripts: {
      prepare: 'is-ci || simple-git-hooks',
    },
    template: `require('esbuild-register');
const { simpleGitHooks } = require('@modyqyw/fabric');

module.exports = simpleGitHooks();
`,
    value: 'simpleGitHooks',
  },
];

async function getConflictResolution(
  task: ListrTaskWrapper<Ctx, typeof DefaultRenderer, typeof SimpleRenderer>,
) {
  return (await task.prompt(ListrInquirerPromptAdapter).run(select, {
    choices: [
      {
        name: 'Keep Biome and remove other functions',
        value: 'keep',
      },
      {
        name: 'Remove Biome and keep other functions',
        value: 'remove',
      },
    ],
    message:
      'Biome may conflict with other functions and is recommended to be used separately. What do you want to do?',
  })) as 'keep' | 'remove';
}

const tasks = new Listr<Ctx>([
  {
    rendererOptions: {
      persistentOutput: true,
    },
    task: async (ctx, task) => {
      ctx.functions = [];
      let shouldSkip = false;
      if (opts.all) {
        const resolution = await getConflictResolution(task);
        ctx.functions.push(
          ...functionOptions
            .filter((o) => {
              if (resolution === 'keep') {
                return (
                  o.name !== 'Prettier' &&
                  o.name !== 'ESLint' &&
                  o.name !== 'oxlint'
                );
              }
              return o.name !== 'biome';
            })
            .map((o) => o.name),
        );
        shouldSkip = true;
      } else {
        if (opts.biome && (opts.prettier || opts.eslint || opts.oxlint)) {
          const resolution = await getConflictResolution(task);
          if (resolution === 'keep') {
            opts.prettier = false;
            opts.eslint = false;
            opts.oxlint = false;
          } else {
            opts.biome = false;
          }
        }
        for (const o of functionOptions) {
          if (opts[o.value]) {
            ctx.functions.push(o.name);
            shouldSkip = true;
          }
        }
      }
      if (shouldSkip) {
        task.output = `${ctx.functions.join(', ')}`;
        return task.skip();
      }
      const functions = (await task
        .prompt(ListrInquirerPromptAdapter)
        .run(checkbox, {
          choices: functionOptions,
          message: 'What functions do you want for your project?',
        })) as string[];
      if (
        functions.includes('biome') &&
        (functions.includes('prettier') ||
          functions.includes('eslint') ||
          functions.includes('oxlint'))
      ) {
        const resolution = await getConflictResolution(task);
        if (resolution === 'keep') {
          functions.splice(functions.indexOf('prettier'), 1);
          functions.splice(functions.indexOf('eslint'), 1);
          functions.splice(functions.indexOf('oxlint'), 1);
        } else {
          functions.splice(functions.indexOf('biome'), 1);
        }
      }
      ctx.functions = functions.map(
        (f) => functionOptions.find((o) => o.value === f)!.name,
      );
      task.output = `${ctx.functions.join(', ')}`;
    },
    title: 'Select functions',
  },
  {
    rendererOptions: {
      persistentOutput: true,
    },
    task: async (ctx, task) => {
      if (opts.vscode != null) {
        ctx.vscode = opts.vscode;
        task.output = ctx.vscode ? 'Yes' : 'No';
        return task.skip();
      }
      ctx.vscode = await task.prompt(ListrInquirerPromptAdapter).run(confirm, {
        default: true,
        message: 'Setup .vscode?',
      });
      task.output = ctx.vscode ? 'Yes' : 'No';
    },
    title: 'Setup .vscode?',
  },
  {
    task: async (ctx) => {
      const filtered = functionOptions.filter((o) =>
        ctx.functions.includes(o.name),
      );
      await Promise.all(
        filtered
          .filter((f) => !!f.patterns)
          .flatMap((f) =>
            fg
              .sync(f.patterns!, { dot: true })
              .map((f) => unlink(resolvePath(f))),
          ),
      );
      if (packageJsonObject) {
        for (const o of filtered) {
          if (o.field) delete packageJsonObject[o.field];
        }
      }
    },
    title: 'Clean legacy setup',
  },
  {
    retry: 1,
    task: async (ctx) => {
      const promises: Promise<any>[] = [];
      const filtered = functionOptions.filter((o) =>
        ctx.functions.includes(o.name),
      );
      const packages = [...new Set(filtered.flatMap((f) => f.packages ?? []))];
      const notInstalled = packages.filter(
        (p) =>
          !(
            packageJsonObject?.devDependencies?.[p] ||
            packageJsonObject?.dependencies?.[p]
          ),
      );
      if (notInstalled.length > 0) {
        promises.push(
          installPackage(notInstalled, {
            cwd: resolve(cwd, dir),
            dev: true,
            silent: true,
          }),
        );
      }
      for (const f of filtered) {
        if (f.path && f.template) {
          promises.push(writeFile(resolvePath(f.path), f.template));
        }
        if (f.scripts) {
          packageJsonObject.scripts = {
            ...packageJsonObject.scripts,
            ...f.scripts,
          };
        }
      }
      if (ctx.vscode) {
        try {
          accessSync(resolve('.vscode'));
        } catch {
          mkdirSync(resolve('.vscode'));
        }
        const vscodeRecommendations = filtered.flatMap(
          (f) => f.vscodeRecommendations ?? [],
        );
        if (vscodeRecommendations.length > 0) {
          promises.push(
            writeFile(
              resolvePath('.vscode', 'extensions.json'),
              JSON.stringify(
                {
                  recommendations: vscodeRecommendations.toSorted((a, b) =>
                    a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()),
                  ),
                },
                null,
                packageJsonIndent,
              ) + packageJsonEof,
            ),
          );
        }
        const vscodeSettings = defu(
          {},
          ...filtered.map((f) => f.vscodeSettings ?? {}),
        );
        if (Object.keys(vscodeSettings).length > 0) {
          promises.push(
            writeFile(
              resolvePath('.vscode', 'settings.json'),
              JSON.stringify(
                sortObjectKeys(vscodeSettings),
                null,
                packageJsonIndent,
              ) + packageJsonEof,
            ),
          );
        }
      }
      promises.push(
        writeFile(
          packageJsonPath,
          JSON.stringify(
            sortPackageJson(packageJsonObject),
            null,
            packageJsonIndent,
          ) + packageJsonEof,
        ),
      );
      await Promise.all(promises);
    },
    title: 'Setup',
  },
]);
tasks.run().catch((error) => {
  consola.error(error);
  throw new Error(error);
});
