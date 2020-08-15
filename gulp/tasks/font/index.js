const { src, dest } = require('gulp');

function buildFonts() {
  return src('../app/src/fonts/**/*').pipe(dest('../dist/src/fonts'));
}

module.exports = {
  buildFonts,
};
