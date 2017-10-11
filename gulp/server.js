'use strict';

var browserSync = require("browser-sync"),
    reload = browserSync.reload,
    nodemon = require('gulp-nodemon');

var config = {
    // server: {
    //     baseDir: "./build"
    // },
    proxy: 'http://localhost:6000',
    tunnel: false,
    files: ['./build/**/*.*'],
    port: 8000,
    logPrefix: "saymyname"
};

module.exports = function(gulp, plugins, path){
	return function(){
        browserSync.init(config)
        browserSync.watch(path.watch.server).on('change', browserSync.reload);
	}
}


