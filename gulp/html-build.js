'use strict';
const nunjucks = require('gulp-nunjucks-html');

module.exports = function(gulp, plugins, path){
    return function(){
        gulp.src(path.src.html)
			.pipe(nunjucks({
		      searchPaths: [path.src.templates]
		    }))
    		.pipe(gulp.dest(path.build.html));
    }
};