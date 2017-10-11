'use strict';

var watch = require('gulp-watch');

module.exports = function(gulp, plugins, path){
    return function(){
	    watch([path.watch.html], function(event, cb) {
	        gulp.start('html:build');
	    });
	    watch([path.watch.style], function(event, cb) {
	        gulp.start('style:build')
	        //gulp.start('concat');
	    });
	    watch([path.watch.js], function(event, cb) {
	        gulp.start('js:build');
	    });
	    watch([path.watch.img], function(event, cb) {
	        gulp.start('image:build');
	    });
	    watch([path.watch.fonts], function(event, cb) {
	        gulp.start('fonts:build');
	    });
    }
};