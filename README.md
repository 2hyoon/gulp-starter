# Gulp Starter for Vanila JS

Gulp task runner starter for the Vanila Javascript.

## Getting Started

### Installation

Prerequisites: Make sure you have [**Node**](https://nodejs.org/en/) and **NPM** installed on your computer.

**Install NPM packages.**

```bash
$ npm install
```

### Running tasks

**Run development mode.** This task will automatically open your browser via [Browsersync](https://www.browsersync.io/) and reload pages whenever your files get updated.

```bash
$ npm run dev
```

**Build production files.** This task will generate production files and emit them into **dist** folder.

```bash
$ npm run prod
```

**Run ESLint.** You can run [ESLint](https://eslint.org/) in CLI. Also ESLint is hooked up by `gulp-eslint` when you run `npm run dev` or `npm run prod`

```bash
$ npm run lint
```

**Run Stylelint.** You can run [Stylelint](https://stylelint.io/) in CLI. Also Stylelint is hooked up by `gulp-stylelint` when you run `npm run dev` or `npm run prod`

```bash
$ npm run stylelint
```

### Folder Structure

```bash
├── .editorconfig # https://editorconfig.org/
├── .eslintrc.json # https://eslint.org/
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
