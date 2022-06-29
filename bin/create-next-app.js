const inquirer = require('inquirer');
const chalk = require('chalk');
const { json, deleteFiles } = require('mrm-core');

const runCommand = require('../utils/run-command');

const TEMPLATE_REPO = 'https://github.com/afiiif/nextjs-ts-starter-template.git';

const createNextApp = ({ name: nameUnvalidated, pkgManager = 'yarn' }) => {
  const name = nameUnvalidated.replace(/\s+/g, '-').toLowerCase();

  console.info('📥 Cloning Next.js TS starter template...\n');
  runCommand(`git clone --depth 1 ${TEMPLATE_REPO} ${name}`);
  console.info(chalk.green('\n✅ Clone success\n'));

  runCommand(`cd ${name} && git remote remove origin`);
  deleteFiles([`${name}/yarn.lock`, `${name}/.git`]);
  json(`${name}/package.json`).set('name', name).set('version', '0.1.0').save();

  console.info(`📦 Installing dependencies using ${chalk.bold(pkgManager)}\n`);
  runCommand(`cd ${name} && ${pkgManager} install`);
  runCommand(`cd ${name} && git init && git add . && git commit -m "Initialize project"`);

  console.info('\nYour project is ready! 🚀\n');
  console.log(`cd ${name} && ${pkgManager === 'npm' ? 'npm run' : pkgManager} dev\n`);

  runCommand(`cd ${name} && code .`, null);
};

const promptPkgManager = ({ name = 'my-app' }) => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'pkgManager',
        message: 'What package manager do you want to use?',
        choices: ['npm', 'yarn', 'pnpm'],
        default: 'yarn',
      },
    ])
    .then(({ pkgManager }) => {
      console.log('');
      createNextApp({ name, pkgManager });
    });
};

const promptNextApp = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your project name?',
        default: 'my-app',
      },
    ])
    .then(({ name }) => {
      promptPkgManager({ name });
    });
};

module.exports = {
  promptNextApp,
  promptPkgManager,
  createNextApp,
};
