'use strict';

var gulp = require('gulp'),
    registrConfig = require('./gulp/config/registr.js'),
    plugins = require('gulp-load-plugins')();



    function getTask(task){
        return require('./gulp/' + task)(gulp, plugins, registrConfig);
    }

    // gulp tasks
    gulp.task('style:build', getTask('styles-build'));
    gulp.task('html:build', getTask('html-build'));
    gulp.task('js:build', getTask('js-build'));
    gulp.task('image:build', getTask('img-build'));
    gulp.task('watch', getTask('watch'));
    gulp.task('webserver', getTask('server'));

    gulp.task('build', [
        'html:build',
        'js:build',
        'style:build',
        'image:build'
        //'concat'
    ]);

    gulp.task('clean', function (cb) {
        rimraf(path.clean, cb);
    });
    gulp.task('default', ['build', 'webserver', 'watch']);