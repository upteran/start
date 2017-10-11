'use strict';
var browserSync = require('browser-sync'),
    reload = browserSync.reload;

module.exports = function(gulp, plugins, path){
    return function(){
        return gulp.src(path.src.html)
            .pipe(plugins.rigger())
            .pipe(gulp.dest(path.build.html))
            // .pipe(reload({stream: true}));
    }
};