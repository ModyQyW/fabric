#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { unlink, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { installPackage } from '@antfu/install-pkg';
import { checkbox } from '@inquirer/prompts';
import { ListrInquirerPromptAdapter } from '@listr2/prompt-adapter-inquirer';
import { Command } from 'commander';
import consola from 'consola';
import fg from 'fast-glob';
import { Listr } from 'listr2';
import { isPackageExists } from 'local-pkg';
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
  .option('--tsc', 'setup tsc')
  .option('--commitlint', 'setup commitlint')
  .option('--lint-staged', 'setup lint-staged')
  .option('--simple-git-hooks', 'setup simple-git-hooks')
  .option('--editorconfig', 'setup .editorconfig')
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
  packages?: string[];
  path?: string;
  patterns?: string[];
  scripts?: Record<string, string>;
  template?: string;
  value: string;
}[] = [
  {
    description: 'EditorConfig',
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
    value: 'editorconfig',
  },
  {
    description: 'Prettier',
    field: 'prettier',
    packages: ['prettier', 'esbuild-register'],
    path: 'prettier.config.cjs',
    patterns: ['.prettierrc*', 'prettier.config.*'],
    scripts: {
      format:
        'prettier . "!**/package-lock.json*" "!**/yarn.lock" "!**/pnpm-lock.yaml" --ignore-unknown --write --cache --log-level=warn',
    },
    template: `require('esbuild-register');
const { prettier } = require('@modyqyw/fabric');

module.exports = prettier();
`,
    value: 'prettier',
  },
  {
    description: 'ESLint',
    field: 'eslintConfig',
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
  },
  {
    description: 'oxlint',
    packages: ['oxlint'],
    scripts: {
      'lint:oxlint': 'oxlint --deny=correctness --deny=perf --fix',
    },
    value: 'oxlint',
  },
  {
    description: 'Stylelint',
    field: 'stylelint',
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
  },
  {
    description: 'markdownlint',
    field: 'markdownlint',
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
  },
  {
    description: 'tsc',
    packages: [
      'typescript',
      isPackageExists('vue') ? 'vue-tsc' : undefined,
    ].filter(Boolean) as string[],
    scripts: {
      typecheck:
        packageJsonObject?.scripts?.typecheck ??
        (isPackageExists('vue') ? 'vue-tsc --noEmit' : 'tsc --noEmit'),
    },
    value: 'tsc',
  },
  {
    description: 'commitlint',
    field: 'commitlint',
    packages: ['@commitlint/cli'],
    path: 'commitlint.config.mjs',
    patterns: ['.commitlintrc*', 'commitlint.config.*'],
    template: `import { commitlint } from '@modyqyw/fabric';

export default commitlint();
`,
    value: 'commitlint',
  },
  {
    description: 'lint-staged',
    field: 'lint-staged',
    packages: ['lint-staged'],
    path: 'lint-staged.config.mjs',
    patterns: ['.lintstagedrc*', 'lint-staged.config.*'],
    template: `import { lintStaged } from '@modyqyw/fabric';

export default lintStaged();
`,
    value: 'lint-staged',
  },
  {
    description: 'simple-git-hooks',
    field: 'simple-git-hooks',
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
    value: 'simple-git-hooks',
  },
];

const tasks = new Listr<Ctx>([
  {
    rendererOptions: {
      persistentOutput: true,
    },
    task: async (ctx, task) => {
      ctx.functions = [];
      let shouldSkip = false;
      if (opts.all) {
        ctx.functions.push(...functionOptions.map((o) => o.value));
        shouldSkip = true;
      } else {
        for (const o of functionOptions) {
          if (opts[o.value]) {
            ctx.functions.push(o.value);
            shouldSkip = true;
          }
        }
      }
      if (shouldSkip) {
        task.output = `Picked ${ctx.functions.join(', ')}`;
        return task.skip();
      }
      const functions = (await task
        .prompt(ListrInquirerPromptAdapter)
        .run(checkbox, {
          choices: functionOptions,
          message: 'Please pick functions',
        })) as string[];
      ctx.functions = functions;
      task.output = `Picked ${functions.join(', ')}`;
    },
    title: 'Picked functions',
  },
  {
    task: async (ctx) => {
      const filtered = functionOptions.filter((o) =>
        ctx.functions.includes(o.value),
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
        ctx.functions.includes(o.value),
      );
      const packages = [...new Set(filtered.flatMap((f) => f.packages ?? []))];
      const notInstalled = packages.filter(
        (p) =>
          !(
            packageJsonObject?.devDependencies[p] ||
            packageJsonObject?.dependencies[p]
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
