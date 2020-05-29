const {src, dest} = require('gulp');

// use a different version of webpack than the one webpack-stream uses
const compiler = require('webpack');

// run webpack as a stream to conveniently integrate with gulp.
const webpack = require('webpack-stream');

// module
const module = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

// dev build
function jsDev() {
  return src('../app/src/js/app.js')
    .pipe(webpack({
        mode: 'development',
        devtool: 'source-map',
        watch: true,
        output: {
          filename: 'app.js'
        },
        module
      }, 
      compiler, 
      function(err, stats){ /* Use stats to do more things if needed */ }))
    .pipe(dest('../dist/src/js'));
}

// production build
function jsProd() {
  return src('../app/src/js/app.js')
    .pipe(webpack({
        mode: 'production',
        watch: true,
        output: {
          filename: 'app.js'
        },
        module
      }, 
      compiler, 
      function(err, stats){ /* Use stats to do more things if needed */ }))
    .pipe(dest('../dist/src/js'));
}


module.exports = {
  jsDev,
  jsProd
}