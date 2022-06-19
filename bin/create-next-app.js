const { execSync } = require('child_process');
const inquirer = require('inquirer');
const { json, deleteFiles } = require('mrm-core');

const TEMPLATE_REPO = 'https://github.com/afiiif/nextjs-ts-starter-template.git';

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (err) {
    console.log(`Failed to execute ${command}`);
    console.error(err);
    process.exit(1);
  }
};

const createNextApp = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'nameUnvalidated',
        message: 'What is your project name?',
        default: 'my-app',
      },
    ])
    .then(({ nameUnvalidated }) => {
      const name = nameUnvalidated.replace(/\s+/g, '-').toLowerCase();
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
          console.info('Cloning Next.js TS starter template...');
          runCommand(`git clone --depth 1 ${TEMPLATE_REPO} ${name}`);
          runCommand(`cd ${name} && git remote remove origin`);

          json(`${name}/package.json`).set('name', name).set('version', '0.1.0').save();
          deleteFiles([`${name}/yarn.lock`, `${name}/.git`]);
          runCommand(`cd ${name} && git init && git add . && git commit -m "Initialize project"`);

          console.info('Installing dependencies...');
          runCommand(`cd ${name} && ${pkgManager} install`);

          console.info('Your project is ready! 🚀');
          console.log(`cd ${name} && ${pkgManager === 'npm' ? 'npm run' : pkgManager} dev`);
        });
    });
};

module.exports = createNextApp;
