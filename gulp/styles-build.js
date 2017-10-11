'use strict';

var postcss = require('gulp-postcss'),
    pxtorem = require('postcss-pxtorem'),
    cssnext = require('postcss-cssnext'),
    precss = require('precss'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    flexbugs = require('postcss-flexbugs-fixes'),
    rucksack = require('rucksack-css'),
    // colorFunction = require("postcss-color-function"),
    initialprop = require('postcss-initial');

module.exports = function(gulp, plugins, path){
    return function(){
        var processors = [
            precss,
            rucksack,
            cssnext({
                  features: {
                        autoprefixer: {
                        browsers: ['last 7 version']
                      },
                        sourcemap: true,
                        rem : false
                  }
              }),
            
            flexbugs,
            initialprop,
            pxtorem({
                replace: false,
                prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing']
            })

            ];

        return gulp.src(path.src.style)
            .pipe(plugins.plumber())
            .pipe(plugins.sourcemaps.init())
            .pipe(postcss(processors))
            .pipe(plugins.csscomb())
            //.pipe(cssnano())
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest(path.build.css))
            .pipe(reload({stream: true}));
    }
};