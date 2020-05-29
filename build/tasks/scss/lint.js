const {src, dest} = require('gulp');

// help point out problems with your CSS code
const lint = require('gulp-sass-lint');


function scssLint() {
  return src('../app/src/scss/**/*.s+(a|c)ss')
  .pipe(lint())
  .pipe(lint.format())
  .pipe(lint.failOnError())
}

module.exports = {
  scssLint
}