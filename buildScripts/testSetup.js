// This file in not transpiled, so must use CommonJs and ES5

//Register babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that mocha does not understnd
require.extensions['.css'] = function() {};
