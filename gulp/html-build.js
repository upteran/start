'use strict';
const nunjucks = require('gulp-nunjucks-html'),
      nunjucksRender = require('gulp-nunjucks-render'),
      data = require('gulp-data'),
      gulpPath = require('path'),
      fs = require('fs'),
      htmlbeautify = require('gulp-html-beautify'),
      browserSync = require('browser-sync'),
      reload = browserSync.reload;


var getData = function (file) {
    var dataPath = gulpPath.resolve('data/data.json');
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
};
var htmlOptions = {
    indentSize: 4
};
module.exports = function(gulp, plugins, path){
    return function(){
        return gulp.src(path.src.html)
            // .pipe(data(getData))
            .pipe(nunjucksRender({
              path: [path.src.templates]
            }))
            .pipe(htmlbeautify(htmlOptions))
            .pipe(gulp.dest(path.build.html));
    }
};