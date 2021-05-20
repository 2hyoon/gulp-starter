# Gulp Starter for Vanila JS

- Gulp task runner starter for html, s/css, vanilla javascript, fonts and images.
- [Handlebars](https://handlebarsjs.com/) is used for html templating.

## Installation

Prerequisites: Make sure you have [**Node**](https://nodejs.org/en/) and [**NPM**](https://www.npmjs.com/) installed on your computer.

**Install NPM packages.**

```bash
$ npm install
```

## How to Run Tasks

**How To Run Development Mode**

- This task will automatically open your browser via [Browsersync](https://www.browsersync.io/) and reload pages whenever your files get updated.

```bash
$ npm run dev
```

**How to Build Production Files**

- This task will generate production files and emit them into **dist** folder.

```bash
$ npm run prod
```

**How to ESLint.**

- Airbnb Basic Config(eslint-config-airbnb-base) is Used for Lint.
- ESLint extends Prettier to turn off ESLint formatting. (See .eslintrc.json) Formatting works separately with Prettier.
- ESLint is hooked up by `gulp-eslint` when you run `npm run dev` or `npm run prod`
- You can also run [ESLint](https://eslint.org/) in CLI with package.json

```bash
$ npm run lint
```

- To run with ESLint CLI

```bash
$ npx eslint <file-name>
$ npx eslint --fix <file-name> # Automatically fix problems
$ npx eslint --fix-dry-run <file-name> # Automatically fix problems without saving the changes to the file system
```

**How to Stylelint**

- Stylelint is hooked up by `gulp-stylelint` when you run `npm run dev` or `npm run prod`
- You can run [Stylelint](https://stylelint.io/) in CLI with package.json.

```bash
$ npm run stylelint
```

- To run with Stylelint CLI

```bash
$ npx stylelint "./app/src/styles/**/*.{css,scss,sass}"
$ npx stylelint --fix "./app/src/styles/**/*.{css,scss,sass}"
```

**Prettier for Formatting**

- Prettier with VSCode:
- Prettier with CLI

```bash
$ npx prettier --write <file-name> # formatting everything
$ npx prettier --check <file-name> # only checks that files are already formatted, rather than overwriting them.
```

## Folder Structure

```bash
├── .editorconfig # https://editorconfig.org/
├── .eslintrc.json # https://eslint.org/
├── .eslintignore
├── .gitignore
├── .prettierignore
├── .prettierrc.json # https://prettier.io/
├── .stylelintrc.json # https://stylelint.io/
├── README.md
├── app # app's source files
│   └── src
│       ├── fonts
│       ├── images
│       ├── scripts
│       ├── styles
│       └── templates
├── dist # compiled files go here
├── gulp # gulp task files
│   └── tasks
│       ├── fonts
│       │   └── index.js
│       ├── html
│       │   └── index.js
│       ├── images
│       │   └── index.js
│       ├── scripts
│       │   └── index.js
│       └── styles
│           └── index.js
├── gulpfile.js # gulp entry
├── package-lock.json
└── package.json
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
