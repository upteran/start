'use strict';

var nodemon = require('gulp-nodemon'),
	browserSync = require("browser-sync"),
    reload = browserSync.reload;

module.exports = function(gulp, plugins, path){
    return function(cb){
    	var called = false;
		  return nodemon({
		    script: 'index.js',
		    ignore: [
		      'gulpfile.js',
		      'node_modules/'
		    ]
		  })
		  .on('start', function () {
		    if (!called) {
		      called = true;
		      cb();
		    }
		  })
		  // .on('restart', function () {
		  //   setTimeout(function () {
		  //     reload({ stream: false });
		  //   }, 1000);
		  // });

    }
};