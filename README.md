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

- โก๏ธ [Next.js 12](https://nextjs.org/)
- โ๏ธ [React 18](https://reactjs.org/)
- ๐ [Tailwind CSS 3](https://tailwindcss.com/)
- ๐ช [Prettier](https://prettier.io/) โ Format your code automatically, this will also run **on save**
- ๐งผ [ESLint](https://eslint.org/) โ Find & fix problems in your code, and **auto sort** your imports
- ๐ถ [Husky](https://www.npmjs.com/package/husky) & [Lint Staged](https://www.npmjs.com/package/lint-staged) โ Check & fix code when commit, block commit if bad code detected
- ๐ [Commit Lint](https://github.com/conventional-changelog/commitlint) โ Make sure the commit message follows the conventional commit
- โ๏ธ [Github Actions](https://github.com/features/actions) โ Check your code on push & pull-request
- ๐ค [Dependabot](https://github.com/dependabot) โ Create pull-request to update your dependencies
- ๐ Absolute Import โ Import modules using `@/` prefix
- ๐ [React Icons](https://react-icons.github.io/react-icons/) โ Include popular icons in your React projects easily
- ๐ [React Power-Ups](https://github.com/afiiif/react-power-ups) โ Collection of React hooks to speed-up your app development

## Setup Existing Project

Add these to your existing project easily:

- [Commit Lint](https://github.com/conventional-changelog/commitlint)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Lint Staged](https://www.npmjs.com/package/lint-staged)
