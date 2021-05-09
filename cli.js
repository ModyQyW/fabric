#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const shell = require('shelljs');
const pkg = require('./package.json');

const program = new Command();

const getCliFilePath = (filename) => {
  if (fs.existsSync(path.join(__dirname, 'config', filename))) {
    return path.join(__dirname, 'config', filename);
  }
  return path.join(__dirname, filename);
};

const cwd = process.cwd();

console.log(chalk.cyan(`\nmodyqyw-fabric is running in ${cwd} now.\n`));

program
  .version(pkg.version, '-v, --version')
  .command('config [dir]')
  .description('Config different packages for formatting and linting')
  .action((dir = '.') => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'framework',
          message: 'Select framework',
          default: 'native',
          choices: [
            {
              name: 'Native',
              value: 'native',
            },
            {
              name: 'Vue 2 / Nuxt 2 / UniApp',
              value: 'vue2',
            },
            {
              name: 'Vue 3 / UniApp',
              value: 'vue3',
            },
            {
              name:
                'React 17 / Umi 3 / Next 10 / ReactNative 0.64 / Taro 3 / Rax 1 / Remax 2',
              value: 'react',
            },
          ],
        },
        {
          type: 'confirm',
          name: 'typescript',
          message: 'TypeScript?',
          default: 'y',
        },
        {
          type: 'checkbox',
          name: 'config',
          message: 'Select configs',
          default: [
            'git',
            'editorconfig',
            'prettier-eslint',
            'stylelint',
            'markdownlint',
            'lint-md',
            'ls-lint',
            'commitlint',
            'commitizen',
            'lint-staged',
            'husky',
          ],
          choices: [
            {
              name: 'Git',
              value: 'git',
            },
            {
              name: 'EditorConfig',
              value: 'editorconfig',
            },
            {
              name: 'Prettier & ESLint',
              value: 'prettier-eslint',
            },
            {
              name: 'Stylelint',
              value: 'stylelint',
            },
            {
              name: 'Markdownlint',
              value: 'markdownlint',
            },
            {
              name: 'LintMD',
              value: 'lint-md',
            },
            {
              name: 'LsLint',
              value: 'ls-lint',
            },
            {
              name: 'Commitlint',
              value: 'commitlint',
            },
            {
              name: 'Commitizen',
              value: 'commitizen',
            },
            {
              name: 'LintStaged',
              value: 'lint-staged',
            },
            {
              name: 'Husky',
              value: 'husky',
            },
          ],
        },
      ])
      .then(({ framework, typescript, config }) => {
        if (config.includes('stylelint')) {
          inquirer
            .prompt([
              {
                type: 'list',
                name: 'css',
                message: 'Select css pre-processor',
                default: 'css',
                choices: [
                  {
                    name: 'CSS',
                    value: 'css',
                  },
                  {
                    name: 'LESS',
                    value: 'less',
                  },
                  {
                    name: 'SASS',
                    value: 'sass',
                  },
                  {
                    name: 'SCSS',
                    value: 'scss',
                  },
                ],
              },
            ])
            .then(({ css }) => {
              if (!fs.existsSync(path.resolve(dir, 'package.json'))) {
                shell.exec('npm init -y');
              }
              const packageJson = fs.readFileSync(
                path.resolve(dir, 'package.json'),
                {
                  encoding: 'utf8',
                },
              );
              const indent = '  ';
              const packageObject = JSON.parse(packageJson);
              const lintScriptItems = [];
              // @modyqyw/fabric
              packageObject.devDependencies = {
                ...packageObject.devDependencies,
                '@modyqyw/fabric': `~${pkg.version}`,
              };
              // git
              if (config.includes('git')) {
                if (!shell.which('git')) {
                  shell.echo(
                    'Git is required in your system. Please install Git first.',
                  );
                } else {
                  shell.exec('git config --global core.autocrlf false');
                  shell.exec('git config --global init.defaultBranch main');
                  if (!fs.existsSync(path.resolve(dir, '.git'))) {
                    shell.exec('git init');
                  }
                  fs.copyFileSync(
                    getCliFilePath('.gitattributes'),
                    path.resolve(dir, '.gitattributes'),
                  );
                  fs.copyFileSync(
                    // use eslintignore here
                    getCliFilePath('.eslintignore'),
                    path.resolve(dir, '.gitignore'),
                  );
                }
              }
              // editorconfig
              if (config.includes('editorconfig')) {
                fs.copyFileSync(
                  getCliFilePath('.editorconfig'),
                  path.resolve(dir, '.editorconfig'),
                );
              }
              // prettier and eslint
              if (config.includes('prettier-eslint')) {
                packageObject.devDependencies = {
                  ...packageObject.devDependencies,
                  '@babel/core': pkg.dependencies['@babel/core'],
                  '@babel/eslint-parser':
                    pkg.dependencies['@babel/eslint-parser'],
                  eslint: pkg.devDependencies.eslint,
                  prettier: pkg.devDependencies.prettier,
                };
                if (typescript) {
                  packageObject.devDependencies = {
                    ...packageObject.devDependencies,
                    '@typescript-eslint/eslint-plugin':
                      pkg.dependencies['@typescript-eslint/eslint-plugin'],
                    '@typescript-eslint/parser':
                      pkg.dependencies['@typescript-eslint/parser'],
                    typescript: pkg.dependencies.typescript,
                  };
                }
                packageObject.scripts = {
                  ...packageObject.scripts,
                  'lint:json': 'prettier ./**/*.json --write',
                  'lint:script': packageObject.devDependencies[
                    '@vue/cli-service'
                  ]
                    ? 'vue-cli-service lint --fix'
                    : 'eslint . --ext .js,.jsx,.ts,.tsx,.vue --fix',
                };
                if (shell.which('yarn')) {
                  lintScriptItems.push('yarn lint:json', 'yarn lint:script');
                } else {
                  lintScriptItems.push(
                    'npm run lint:json',
                    'npm run lint:script',
                  );
                }
                delete packageObject.prettier;
                delete packageObject.eslintConfig;
                shell.rm(
                  '-rf',
                  path.resolve(dir, '.prettierrc'),
                  path.resolve(dir, '.prettierrc.json'),
                  path.resolve(dir, '.prettierrc.yml'),
                  path.resolve(dir, '.prettierrc.yaml'),
                  path.resolve(dir, '.prettierrc.json5'),
                  path.resolve(dir, '.prettierrc.cjs'),
                  path.resolve(dir, 'prettier.config.js'),
                  path.resolve(dir, 'prettier.config.cjs'),
                  path.resolve(dir, '.prettierrc.toml'),
                  path.resolve(dir, '.eslintrc.cjs'),
                  path.resolve(dir, '.eslintrc.yaml'),
                  path.resolve(dir, '.eslintrc.yml'),
                  path.resolve(dir, '.eslintrc.json'),
                );
                fs.copyFileSync(
                  getCliFilePath('.prettierrc.js'),
                  path.resolve(dir, '.prettierrc.js'),
                );
                let extend = '';
                switch (framework) {
                  case 'vue2':
                    extend = typescript ? 'vue2-typescript' : 'vue2';
                    break;
                  case 'vue3':
                    extend = typescript ? 'vue3-typescript' : 'vue3';
                    break;
                  default:
                    extend = framework;
                    break;
                }
                fs.copyFileSync(
                  getCliFilePath(`.eslintrc-${extend}.js`),
                  path.resolve(dir, '.eslintrc.js'),
                );
                fs.copyFileSync(
                  getCliFilePath('.prettierignore'),
                  path.resolve(dir, '.prettierignore'),
                );
                fs.copyFileSync(
                  getCliFilePath('.eslintignore'),
                  path.resolve(dir, '.eslintignore'),
                );
              }
              // stylelint
              if (config.includes('stylelint')) {
                packageObject.devDependencies = {
                  ...packageObject.devDependencies,
                  stylelint: pkg.devDependencies.stylelint,
                };
                packageObject.scripts = {
                  ...packageObject.scripts,
                  'lint:style':
                    'stylelint ./**/*.{css,less,sass,scss,vue} --fix',
                };
                if (shell.which('yarn')) {
                  lintScriptItems.push('yarn lint:style');
                } else {
                  lintScriptItems.push('npm run lint:style');
                }
                delete packageObject.stylelint;
                shell.rm(
                  '-rf',
                  path.resolve(dir, '.stylelintrc'),
                  path.resolve(dir, 'stylelint.config.js'),
                  path.resolve(dir, 'stylelint.config.cjs'),
                  path.resolve(dir, '.stylelintrc.json'),
                  path.resolve(dir, '.stylelintrc.yaml'),
                  path.resolve(dir, '.stylelintrc.yml'),
                );
                fs.copyFileSync(
                  getCliFilePath(`.stylelintrc-${css}.js`),
                  path.resolve(dir, '.stylelintrc.js'),
                );
                fs.copyFileSync(
                  getCliFilePath('.stylelintignore'),
                  path.resolve(dir, '.stylelintignore'),
                );
              }
              // markdownlint
              if (config.includes('markdownlint')) {
                packageObject.devDependencies = {
                  ...packageObject.devDependencies,
                  'markdownlint-cli': pkg.devDependencies['markdownlint-cli'],
                };
                packageObject.scripts = {
                  ...packageObject.scripts,
                  'lint:markdown': 'markdownlint . --fix',
                };
                if (shell.which('yarn')) {
                  lintScriptItems.push('yarn lint:markdown');
                } else {
                  lintScriptItems.push('npm run lint:markdown');
                }
                shell.rm(
                  '-rf',
                  path.resolve(dir, '.markdownlint.yaml'),
                  path.resolve(dir, '.markdownlint.yml'),
                  path.resolve(dir, '.markdownlintrc'),
                );
                fs.copyFileSync(
                  getCliFilePath('.markdownlint.json'),
                  path.resolve(dir, '.markdownlint.json'),
                );
                fs.copyFileSync(
                  getCliFilePath('.markdownlintignore'),
                  path.resolve(dir, '.markdownlintignore'),
                );
              }
              // lint-md
              if (config.includes('lint-md')) {
                packageObject.devDependencies = {
                  ...packageObject.devDependencies,
                  'lint-md-cli': pkg.devDependencies['lint-md-cli'],
                };
                if (config.includes('markdownlint')) {
                  packageObject.scripts = {
                    ...packageObject.scripts,
                    'lint:markdown': 'markdownlint . --fix && lint-md . --fix',
                  };
                } else {
                  packageObject.scripts = {
                    ...packageObject.scripts,
                    'lint:markdown': 'lint-md . --fix',
                  };
                }
                fs.copyFileSync(
                  getCliFilePath('.lintmdrc'),
                  path.resolve(dir, '.lintmdrc'),
                );
              }
              // ls-lint
              if (config.includes('ls-lint')) {
                packageObject.devDependencies = {
                  ...packageObject.devDependencies,
                  '@ls-lint/ls-lint': pkg.devDependencies['@ls-lint/ls-lint'],
                };
                packageObject.scripts = {
                  ...packageObject.scripts,
                  'lint:ls': 'ls-lint .',
                };
                if (shell.which('yarn')) {
                  lintScriptItems.push('yarn lint:ls');
                } else {
                  lintScriptItems.push('npm run lint:ls');
                }
                fs.copyFileSync(
                  getCliFilePath(`.ls-lint.yml`),
                  path.resolve(dir, '.ls-lint.yml'),
                );
              }
              // commitlint
              if (config.includes('commitlint')) {
                packageObject.devDependencies = {
                  ...packageObject.devDependencies,
                  '@commitlint/cli': pkg.devDependencies['@commitlint/cli'],
                };
                delete packageObject.commitlint;
                shell.rm(
                  '-rf',
                  path.resolve(dir, '.commitlintrc.json'),
                  path.resolve(dir, '.commitlintrc.yml'),
                  path.resolve(dir, 'commitlint.config.js'),
                );
                fs.copyFileSync(
                  getCliFilePath('.commitlintrc.js'),
                  path.resolve(dir, '.commitlintrc.js'),
                );
              }
              // commitizen
              if (config.includes('commitizen')) {
                packageObject.scripts = {
                  ...packageObject.scripts,
                  commit: 'cz',
                };
                packageObject.config = {
                  ...packageObject.config,
                  commitizen: {
                    path: './node_modules/cz-conventional-changelog',
                  },
                };
              }
              // lint-staged
              if (config.includes('lint-staged')) {
                packageObject.devDependencies = {
                  ...packageObject.devDependencies,
                  'lint-staged': pkg.devDependencies['lint-staged'],
                };
                delete packageObject['lint-stated'];
                shell.rm(
                  '-rf',
                  path.resolve(dir, '.lintstagedrc'),
                  path.resolve(dir, '.lintstagedrc.json'),
                  path.resolve(dir, '.lintstagedrc.yaml'),
                  path.resolve(dir, '.lintstagedrc.yml'),
                  path.resolve(dir, 'lint-staged.config.js'),
                  path.resolve(dir, '.lintstagedrc.cjs'),
                );
                let lintStagedObject = {};
                if (config.includes('markdownlint')) {
                  lintStagedObject['*.{md,markdown}'] = config.includes(
                    'lint-md',
                  )
                    ? 'markdownlint --fix && lint-md --fix'
                    : 'markdownlint --fix';
                }
                if (config.includes('prettier-eslint')) {
                  lintStagedObject['*.json'] = 'prettier --write';
                  lintStagedObject['*.{js,jsx,ts,tsx,vue}'] = packageObject
                    .devDependencies['@vue/cli-service']
                    ? 'vue-cli-service lint --fix'
                    : 'eslint --fix';
                }
                if (config.includes('stylelint')) {
                  lintStagedObject['*.{css,less,sass,scss,vue}'] =
                    'stylelint --fix';
                }
                lintStagedObject = Object.keys(lintStagedObject)
                  .sort()
                  .reduce((acc, cur) => {
                    acc[cur] = lintStagedObject[cur];
                    return acc;
                  }, {});
                fs.writeFileSync(
                  path.resolve(dir, '.lintstagedrc.js'),
                  `module.exports = ${JSON.stringify(
                    lintStagedObject,
                    null,
                    indent,
                  )};\n`,
                );
              }
              // husky
              if (config.includes('husky')) {
                packageObject.scripts = {
                  ...packageObject.scripts,
                  prepare: 'is-ci || husky install',
                };
                delete packageObject.husky;
                delete packageObject.gitHooks;
                packageObject.devDependencies = {
                  ...packageObject.devDependencies,
                  husky: pkg.devDependencies.husky,
                  'is-ci': pkg.devDependencies['is-ci'],
                };
                if (!fs.existsSync(path.resolve(dir, '.husky'))) {
                  shell.mkdir(path.resolve(dir, '.husky'));
                }
                if (config.includes('commitlint')) {
                  fs.writeFileSync(
                    path.resolve(dir, '.husky', 'commit-msg'),
                    `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install commitlint --edit $1\n`,
                  );
                }
                if (
                  config.includes('ls-lint') &&
                  config.includes('lint-staged')
                ) {
                  fs.writeFileSync(
                    path.resolve(dir, '.husky', 'pre-commit'),
                    `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install ls-lint . && npx --no-install lint-staged\n`,
                  );
                } else if (config.includes('ls-lint')) {
                  fs.writeFileSync(
                    path.resolve(dir, '.husky', 'pre-commit'),
                    `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install ls-lint .\n`,
                  );
                } else if (config.includes('lint-staged')) {
                  fs.writeFileSync(
                    path.resolve(dir, '.husky', 'pre-commit'),
                    `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install lint-staged\n`,
                  );
                }
                shell.chmod('+x', path.resolve(dir, '.husky', '*'));
              }
              // write package.json
              packageObject.devDependencies = Object.keys(
                packageObject.devDependencies,
              )
                .sort()
                .reduce((acc, cur) => {
                  acc[cur] = packageObject.devDependencies[cur];
                  return acc;
                }, {});
              packageObject.scripts = {
                ...packageObject.scripts,
                lint: lintScriptItems.join(' && '),
              };
              fs.writeFileSync(
                path.resolve(dir, 'package.json'),
                `${JSON.stringify(packageObject, null, indent)}`,
              );
              // install dependencies
              console.log(chalk.cyan('\nInstalling dependencies...\n'));
              let command = '';
              if (fs.existsSync(path.resolve(dir, 'yarn.lock'))) {
                if (!shell.which('yarn')) {
                  shell.echo(
                    "\nThis is a yarn project but you haven't install yarn. Installing yarn for you now...\n",
                  );
                  shell.exec('npm i -g yarn');
                }
                command = 'yarn install';
              } else if (
                fs.existsSync(path.resolve(dir, 'package-lock.lock'))
              ) {
                command = 'npm install';
              } else if (shell.which('yarn')) {
                command = 'yarn install';
              } else {
                command = 'npm install';
              }
              shell.chmod('+x', path.resolve(dir, '.git', 'hooks', '*'));
              // finished 🎉
              shell.cd(path.resolve(dir));
              shell.exec(command);
              if (shell.cd('-').code === 0) {
                console.log(
                  chalk.cyan(
                    '\nDone! 🎉 Please confirm there are no bugs. Or, you can add an issue here: https://github.com/ModyQyW/fabric/issues/new. Thank you! :D\n',
                  ),
                );
              }
            });
        }
      });
  });

program.parse(process.argv);
