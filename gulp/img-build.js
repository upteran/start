'use strict';

var pngquant = require('imagemin-pngquant');

module.exports = function(gulp, plugins, path){
    return function(){
	    gulp.src(path.src.img) //Выберем наши картинки
	        .pipe(plugins.imagemin({ //Сожмем их
	            progressive: true,
	            svgoPlugins: [{removeViewBox: false}],
	            use: [pngquant()],
	            interlaced: true
	        }))
	        .pipe(gulp.dest(path.build.img)) //И бросим в build
	        //.pipe(reload({stream: true}));
    }
};