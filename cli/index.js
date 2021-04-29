#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const { Command } = require('commander');
const inquirer = require('inquirer');
const shell = require('shelljs');

const program = new Command();

program.version('1.28.1', '-v, --version');

program
  .command('config')
  .description('Config different packages for formatting and linting')
  .action(() => {
    console.log('modyqyw-fabric-cli is not ready yet. Please wait. :D');
  });

program.parse(process.argv);
