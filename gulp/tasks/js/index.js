const { src, dest } = require('gulp');

// use a different version of webpack than the one webpack-stream uses
const compiler = require('webpack');

// run webpack as a stream to conveniently integrate with gulp.
const webpack = require('webpack-stream');

// webpack module
const webpackModule = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
  ],
};

function buildScripts() {
  return src('../app/src/js/app.js')
    .pipe(
      webpack(
        {
          mode: process.env.NODE_ENV || 'production',
          devtool: 'source-map',
          watch: true,
          output: {
            filename: 'app.js',
          },
          module: webpackModule,
        },
        compiler,
        function (err, stats) {
          /* Use stats to do more things if needed */
        }
      )
    )
    .pipe(dest('../dist/src/js'));
}

module.exports = {
  buildScripts,
};
