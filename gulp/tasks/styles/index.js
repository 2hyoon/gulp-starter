const { src, dest } = require('gulp');

// compile sass files
const sass = require('gulp-sass');

// to pipe css through several plugins, but parse css only once
const postcss = require('gulp-postcss');

// add vendor prefix
const autoprefixer = require('autoprefixer');

// to write external sourcemap files
const sourcemaps = require('gulp-sourcemaps');

// make css file as small as possible for a production environment
const cssnano = require('cssnano');

//
const stylelint = require('stylelint');

// plugins to use
const plugins = [stylelint(), autoprefixer(), cssnano()];

function buildStyles() {
  return src('./app/src/styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist/src/styles'));
}

module.exports = {
  buildStyles,
};