const {src, dest} = require('gulp');

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

// plugins to use
const plugins = [autoprefixer(), cssnano()];


function scssDev() {
  return src('../app/src/scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('../dist/src/css'));
}


function scssProd() {
  return src('../app/src/scss/app.scss')
  .pipe(sass()).on('error', sass.logError)
  .pipe(postcss(plugins))
  .pipe(dest('../dist/src/css'));
}


module.exports = {
  scssDev,
  scssProd
}
