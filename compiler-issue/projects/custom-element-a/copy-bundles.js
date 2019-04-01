var concat = require('concat-files'); 
var path = require('path');
const fse = require('fs-extra');

var distPath = path.resolve(__dirname, '../../dist/custom-element-a');

var compileTo = path.resolve(__dirname, '../../../static/custom-element-a');
var bundleJs = path.resolve(__dirname, compileTo + '/bundle.js');
var bundleCss = path.resolve(__dirname, compileTo + '/bundle.css');

fse.ensureDir(compileTo, err => {
  if (err) throw err;
});

concat(
  [ 
    `${distPath}/main.js`,
    `${distPath}/runtime.js`,
    `${distPath}/scripts.js`,
    `${distPath}/es2015-polyfills.js`,
    `${distPath}/polyfills.js`
  ], 
  bundleJs, function(err) {
     if (err) {
       throw err;
     }
     console.log('Compiled to, ', bundleJs); 
  }
);

concat(
  [ 
    `${distPath}/styles.css`,
  ], 
  bundleCss, function(err) {
     if (err) {
       throw err;
     }
     console.log('Compiled to, ', bundleCss); 
  }
);
