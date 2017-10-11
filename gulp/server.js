'use strict';

var browserSync = require("browser-sync"),
    reload = browserSync.reload;

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "saymyname"
};

module.exports = function(gulp, plugins, path){
	return function(){
        browserSync.init(config)
        browserSync.watch(path.watch.server).on('change', browserSync.reload);
	}
}