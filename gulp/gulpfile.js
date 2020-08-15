const { series, parallel, watch } = require('gulp');
const { buildFonts } = require('./tasks/font');
const { buildImages } = require('./tasks/image');
const { buildScripts } = require('./tasks/js');
const { buildStyles } = require('./tasks/scss');
const { buildHtml } = require('./tasks/html');
const browserSync = require('browser-sync').create();
const del = require('del');

/**
 * BrowserSync
 */
function serve() {
  browserSync.init({
    server: {
      baseDir: '../dist',
    },
  });
}

/**
 * Watch
 */
const watchHtml = () => {
  watch('../app/src/templates/*.html')
    .on('change', series(buildHtml, browserSync.reload))
    .on('unlink', series(buildHtml, browserSync.reload));
};

const watchStyles = () => {
  watch('../app/src/scss/**/*.scss')
    .on('change', series(buildStyles, browserSync.reload))
    .on('unlink', series(buildStyles, browserSync.reload));
};

const watchScripts = () => {
  watch('../app/src/js/**/*.js')
    .on('change', series(buildScripts, browserSync.reload))
    .on('unlink', series(buildScripts, browserSync.reload));
};

const watchFonts = () => {
  watch('../app/src/font/**/*').on(
    'change',
    series(buildFonts, browserSync.reload)
  );
};

const watchImages = () => {
  watch('../app/src/image/**/*')
    .on('change', series(buildImages, browserSync.reload))
    .on('unlink', series(buildImages, browserSync.reload));
};

/**
 * Clean dist folder
 */
const clean = () => del(['../dist']);

/**
 * Build
 */
const dev = series(
  // clean,
  parallel(buildFonts, buildImages, buildStyles, buildScripts, buildHtml),
  parallel(serve, watchHtml),
  parallel(serve, watchHtml, watchStyles, watchScripts, watchFonts, watchImages)
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
