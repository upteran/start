'use strict';

var webpackStream = require('webpack-stream'),
	webpackConfig = require('./config/webpack.config'),
	babel = require('gulp-babel');

// module.exports = function(gulp, plugins, path){
//     return function(){
// 	    gulp.src(path.src.js) //Найдем наш main файл
// 		    .pipe(webpackStream(webpackConfig))
// 		    //.pipe(plugins.rename('bundle.js'))
// 		    //.pipe(plugins.uglify())
// 		    .pipe(gulp.dest(path.build.js))
//     }
// };


module.exports = function(gulp, plugins, path){
    return function(){
	    gulp.src(path.src.js) //Найдем наш main файл
		    .pipe(webpackStream(webpackConfig))
		    //.pipe(plugins.rename('bundle.js'))
		    //.pipe(plugins.uglify())
		    .pipe(gulp.dest(path.build.js))
    }
};