const browserSync = require('browser-sync').create();
const del = require('del');
const { series, parallel, watch } = require('gulp');
const { buildFonts } = require('./gulp/tasks/fonts');
const { buildImages } = require('./gulp/tasks/images');
const { buildScripts, lintScripts } = require('./gulp/tasks/scripts');
const { buildStyles, lintStyles } = require('./gulp/tasks/styles');
const { buildHtml } = require('./gulp/tasks/html');

/**
 * BrowserSync
 */
const serve = () => {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
  });
};

/**
 * Clean dist folder
 */
const clean = () => del(['./dist']);
const cleanHtml = () => del(['./dist/*.html']);
const cleanStyles = () => del(['./dist/src/styles']);
const cleanScripts = () => del(['./dist/scripts']);
// const cleanFonts = () => del(['./dist/src/fonts']);
const cleanImages = () => del(['./dist/src/images']);

/**
 * Watch
 */
const watchHtml = () => {
  watch('./app/src/templates/**/*.{html,hbs}')
    .on('change', series(buildHtml, browserSync.reload))
    .on('unlink', series(cleanHtml, buildHtml, browserSync.reload));
};

const watchStyles = () => {
  watch('./app/src/styles/**/*.scss')
    .on('change', series(lintStyles, buildStyles, browserSync.reload))
    .on('unlink', series(cleanStyles, buildStyles, browserSync.reload));
};

const watchScripts = () => {
  watch('./app/src/scripts/**/*.js')
    .on('change', series(lintScripts, buildScripts, browserSync.reload))
    .on('unlink', series(cleanScripts, buildScripts, browserSync.reload));
};

const watchFonts = () => {
  watch('./app/src/font/**/*').on(
    'change',
    series(buildFonts, browserSync.reload)
  );
};

const watchImages = () => {
  watch('./app/src/image/**/*')
    .on('change', series(buildImages, browserSync.reload))
    .on('unlink', series(cleanImages, buildImages, browserSync.reload));
};

/**
 * Build
 */
const dev = series(
  clean,
  lintScripts,
  lintStyles,
  parallel(buildFonts, buildImages, buildStyles, buildScripts, buildHtml),
  parallel(serve, watchFonts, watchImages, watchStyles, watchScripts, watchHtml)
);

const prod = series(
  clean,
  parallel(
    lintScripts,
    lintStyles,
    buildFonts,
    buildImages,
    buildScripts,
    buildStyles,
    buildHtml
  )
);

/**
 * Export
 */
module.exports = {
  dev,
  prod,
};

// exports.default = prod;
