const {series, parallel} = require('gulp'); 
const {scssDev, scssProd} = require('./tasks/scss');
const {scssLint} = require('./tasks/scss/lint');
const {jsDev, jsProd} = require('./tasks/js');

// build development files
const buildDev = parallel(series(scssLint, scssDev), jsDev);

// build production files
const buildProd = parallel(scssProd, jsProd);


// exports
// exports.default = buildDev;

module.exports = {
    buildDev,
    buildProd
}
