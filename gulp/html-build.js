'use strict';
const pug = require('gulp-pug');

module.exports = function(gulp, plugins, path){
    return function(){
        gulp.src(path.src.html)
			.pipe(pug({pretty: true}))  //с переносом pretty: true
			.pipe(gulp.dest(path.build.html))
			//.pipe(browserSync.reload({stream: true}));
    }
};