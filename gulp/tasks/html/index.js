const { src, dest } = require('gulp');
const hb = require('gulp-hb');

const buildHtml = () => {
  return src('./app/src/templates/*.html')
    .pipe(hb().partials('./app/src/templates/hbs/*.hbs'))
    .pipe(dest('./dist/'));
};

module.exports = {
  buildHtml,
};
