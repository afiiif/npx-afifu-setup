CLI to create Next.js project or setup existing project.

```sh
npx @afifu/setup
```

There are 2 options:

- Create Next.js TS project
- Add additional setup to current project

Select one of them and it will take care of it.

## Create Next.js App

Run the npx command and choose "Create Next.js TS project".

Or you can simply run this command,

```sh
npx @afifu/setup <app-name>
// Example: npx @afifu/setup my-awesome-app
```

It will create Next.js TypeScript project cloned from [Next.js TS Starter Template](https://github.com/afiiif/nextjs-ts-starter-template), which is packed with:

- ⚡️ [Next.js 12](https://nextjs.org/)
- ⚛️ [React 18](https://reactjs.org/)
- 🎐 [Tailwind CSS 3](https://tailwindcss.com/)
- 🪄 [Prettier](https://prettier.io/) — Format your code automatically, this will also run **on save**
- 🧼 [ESLint](https://eslint.org/) — Find & fix problems in your code, and **auto sort** your imports
- 🐶 [Husky](https://www.npmjs.com/package/husky) & [Lint Staged](https://www.npmjs.com/package/lint-staged) — Check & fix code when commit, block commit if bad code detected
- 📜 [Commit Lint](https://github.com/conventional-changelog/commitlint) — Make sure the commit message follows the conventional commit
- ⚙️ [Github Actions](https://github.com/features/actions) — Check your code on push & pull-request
- 🤖 [Dependabot](https://github.com/dependabot) — Create pull-request to update your dependencies
- 🔗 Absolute Import — Import modules using `@/` prefix

## Setup Existing Project

Add these to your existing project easily:

- [Commit Lint](https://github.com/conventional-changelog/commitlint)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Lint Staged](https://www.npmjs.com/package/lint-staged)
