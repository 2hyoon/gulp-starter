const { src, dest } = require('gulp');

function buildImages() {
  return src('./app/src/images/**/*').pipe(dest('./dist/src/images'));
}

module.exports = {
  buildImages,
};
