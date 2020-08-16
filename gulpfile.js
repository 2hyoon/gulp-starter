const { series, parallel, watch } = require('gulp');
const { buildFonts } = require('./gulp/tasks/fonts');
const { buildImages } = require('./gulp/tasks/images');
const { buildScripts } = require('./gulp/tasks/scripts');
const { buildStyles } = require('./gulp/tasks/styles');
const { buildHtml } = require('./gulp/tasks/html');
const browserSync = require('browser-sync').create();
const del = require('del');

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
  watch('./app/src/templates/*.html')
    .on('change', series(buildHtml, browserSync.reload))
    .on('unlink', series(cleanHtml, buildHtml, browserSync.reload));
};

const watchStyles = () => {
  watch('./app/src/scss/**/*.scss')
    .on('change', series(buildStyles, browserSync.reload))
    .on('unlink', series(cleanStyles, buildStyles, browserSync.reload));
};

const watchScripts = () => {
  watch('./app/src/js/**/*.js')
    .on('change', series(buildScripts, browserSync.reload))
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
  parallel(buildFonts, buildImages, buildStyles, buildScripts, buildHtml),
  parallel(serve, watchHtml)
  // parallel(serve, watchFonts, watchImages, watchStyles, watchScripts, watchHtml)
);

const prod = series(
  clean,
  parallel(buildFonts, buildImages, buildScripts, buildStyles, buildHtml)
);

/**
 * Export
 */
module.exports = {
  dev,
  prod,
};

// exports.default = prod;
