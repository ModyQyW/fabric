#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { unlink, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { installPackage } from '@antfu/install-pkg';
import { checkbox } from '@inquirer/prompts';
import { ListrInquirerPromptAdapter } from '@listr2/prompt-adapter-inquirer';
import { Command } from 'commander';
import consola from 'consola';
import { $ } from 'execa';
import fg from 'fast-glob';
import got from 'got';
import { Listr } from 'listr2';
import { isPackageExists } from 'local-pkg';
import semver from 'semver';
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
const isESM = packageJson.type === 'module';

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
    description: 'Prettier',
    field: 'prettier',
    packages: ['prettier'],
    path: isESM ? 'prettier.config.mjs' : 'prettier.config.cjs',
    patterns: ['.prettierrc*', 'prettier.config.*'],
    scripts: {
      format:
        'prettier . "!**/packages-lock.json*" "!**/yarn.lock" "!**/pnpm-lock.yaml" --ignore-unknown --write --cache --log-level=warn',
    },
    template: isESM
      ? `import { prettier } from '@modyqyw/fabric';

export default prettier();`
      : `const { prettier } = require('@modyqyw/fabric');

module.exports = prettier();`,
    value: 'prettier',
  },
  {
    description: 'ESLint',
    field: 'eslintConfig',
    packages: ['eslint'],
    path: isESM ? 'eslint.config.js' : 'eslint.config.js',
    patterns: ['.eslintrc*', 'eslint.config.*'],
    scripts: {
      'lint:eslint': 'eslint . --fix --cache',
    },
    template: isESM
      ? `import { eslint } from '@modyqyw/fabric';

export default eslint();`
      : `const { eslint } = require('@modyqyw/fabric');

module.exports = eslint();`,
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
    path: isESM ? 'stylelint.config.mjs' : 'stylelint.config.cjs',
    patterns: ['.stylelintrc*', 'stylelint.config.*'],
    scripts: {
      'lint:stylelint':
        'stylelint "./**/*.{css,scss,vue}" --fix --cache --aei --ignore-path=.gitignore',
    },
    template: isESM
      ? `import { stylelint } from '@modyqyw/fabric';

export default stylelint();`
      : `const { stylelint } = require('@modyqyw/fabric');

module.exports = stylelint();`,
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
}`,
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
        packageJsonObject?.scripts?.typecheck ?? isPackageExists('vue')
          ? 'vue-tsc --noEmit'
          : 'tsc --noEmit',
    },
    value: 'tsc',
  },
  {
    description: 'commitlint',
    field: 'commitlint',
    packages: ['@commitlint/cli'],
    path: isESM ? 'commitlint.config.mjs' : 'commitlint.config.cjs',
    patterns: ['.commitlintrc*', 'commitlint.config.*'],
    template: isESM
      ? `import { commitlint } from '@modyqyw/fabric';

export default commitlint();`
      : `const { commitlint } = require('@modyqyw/fabric');

module.exports = commitlint();`,
    value: 'commitlint',
  },
  {
    description: 'lint-staged',
    field: 'lint-staged',
    packages: ['lint-staged'],
    path: isESM ? 'lint-staged.config.mjs' : 'lint-staged.config.cjs',
    patterns: ['.lintstagedrc*', 'lint-staged.config.*'],
    template: isESM
      ? `import { lintStaged } from '@modyqyw/fabric';
export default lintStaged();`
      : `const { lintStaged } = require('@modyqyw/fabric');

module.exports = lintStaged();`,
    value: 'lint-staged',
  },
  {
    description: 'simple-git-hooks',
    field: 'simple-git-hooks',
    packages: ['simple-git-hooks'],
    path: '.simple-git-hooks.cjs',
    patterns: ['.simple-git-hooks*', 'simple-git-hooks.*'],
    template: `const { simpleGitHooks } = require('@modyqyw/fabric');

module.exports = simpleGitHooks();`,
    value: 'simple-git-hooks',
  },
];

const installLtsWithFnm = (ctx: Ctx) => {
  $`fnm install ${ctx.ltsMajor} && fnm alias ${ctx.ltsMajor} default`.catch(
    () => {
      throw new Error(
        `Node.js LTS cannot be installed automatically. Please install https://github.com/schniz/fnm, or manually install Node.js LTS ${ctx.ltsVersion}.`,
      );
    },
  );
};
const tasks = new Listr<Ctx>([
  {
    retry: 1,
    task: async (ctx) => {
      try {
        ctx.nodeVersions = await got(
          'https://nodejs.org/dist/index.json',
        ).json();
        ctx.ltsVersion = ctx.nodeVersions.find((v) => v.lts)!.version;
        ctx.ltsMajor = semver.major(ctx.ltsVersion);
      } catch {
        throw new Error(
          'Can not fetch the Node.js versions. Please check your network.',
        );
      }
    },
    title: 'Fetch Node.js versions, latest LTS and latest LTS major',
  },
  {
    retry: 1,
    task: async (ctx) => {
      // Node.js exist => get current version and current major
      // Node.js not exist => try install LTS with fnm
      try {
        const result = await $`node -v`;
        ctx.currentVersion = result.stdout;
        ctx.currentMajor = semver.major(ctx.currentVersion);
      } catch {
        installLtsWithFnm(ctx);
      }
      // Compare current major and LTS major
      // same => do nothing
      // not same => try install LTS with fnm
      if (ctx.currentMajor !== ctx.ltsMajor) installLtsWithFnm(ctx);
    },
    title: 'Check Node.js',
  },
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
      const notInstalled = filtered.filter((o) =>
        o.packages?.some(
          (p) =>
            !(
              packageJsonObject?.devDependencies[p] ||
              packageJsonObject?.dependencies[p]
            ),
        ),
      );
      if (notInstalled.length > 0) {
        promises.push(
          installPackage(
            notInstalled.flatMap((f) => f.packages ?? []),
            { cwd: resolve(cwd, dir), dev: true, silent: true },
          ),
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
