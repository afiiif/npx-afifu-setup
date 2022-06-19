const inquirer = require('inquirer');
const { json, deleteFiles } = require('mrm-core');

const runCommand = require('../utils/run-command');

const TEMPLATE_REPO = 'https://github.com/afiiif/nextjs-ts-starter-template.git';

const createNextApp = ({ name: nameUnvalidated, pkgManager = 'yarn' }) => {
  const name = nameUnvalidated.replace(/\s+/g, '-').toLowerCase();

  console.info('Cloning Next.js TS starter template...');
  runCommand(`git clone --depth 1 ${TEMPLATE_REPO} ${name}`);
  runCommand(`cd ${name} && git remote remove origin`);

  json(`${name}/package.json`).set('name', name).set('version', '0.1.0').save();
  deleteFiles([`${name}/yarn.lock`, `${name}/.git`]);
  runCommand(`cd ${name} && git init && git add . && git commit -m "Initialize project"`);

  console.info('Installing dependencies...');
  runCommand(`cd ${name} && ${pkgManager} install`);

  console.info('\nYour project is ready! 🚀\n');
  console.log(`cd ${name} && ${pkgManager === 'npm' ? 'npm run' : pkgManager} dev\n`);

  runCommand(`cd ${name} && code .`, null);
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
          createNextApp({ name, pkgManager });
        });
    });
};

module.exports = {
  createNextApp,
  promptNextApp,
};
