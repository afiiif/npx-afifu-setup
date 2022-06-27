#! /usr/bin/env node

const inquirer = require('inquirer');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const { createNextApp, promptNextApp, promptPkgManager } = require('./bin/create-next-app');
const setup = require('./bin/setup');

const { argv } = yargs(hideBin(process.argv));
const {
  _: [appName],
  npm,
  yarn,
  pnpm,
} = argv;

const packageJson = require('./package.json');

console.log(`\n🧰 Running ${packageJson.name} v${packageJson.version}\n`);

if (appName) {
  if (yarn) {
    createNextApp({ name: appName, pkgManager: 'yarn' });
  } else if (npm) {
    createNextApp({ name: appName, pkgManager: 'npm' });
  } else if (pnpm) {
    createNextApp({ name: appName, pkgManager: 'pnpm' });
  } else {
    promptPkgManager({ name: appName });
  }
} else {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'todo',
        message: 'What do you want to do?',
        choices: [
          { name: 'Create Next.js TS project', value: 'create-new' },
          { name: 'Add additional setup to current project', value: 'setup-existing' },
        ],
      },
    ])
    .then(({ todo }) => {
      if (todo === 'create-new') {
        return promptNextApp();
      }
      return setup();
    });
}
