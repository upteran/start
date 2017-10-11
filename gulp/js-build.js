'use strict';

module.exports = function(gulp, plugins, path){
    return function(){
	    gulp.src(path.src.js)
	        .pipe(plugins.rigger())
	        .pipe(plugins.sourcemaps.init())
	        //.pipe(uglify()) Сожмем наш js
	        .pipe(plugins.sourcemaps.write())
	        .pipe(gulp.dest(path.build.js))
	        //.pipe(reload({stream: true}));
    }
};