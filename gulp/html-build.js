'use strict';
const nunjucks = require('gulp-nunjucks-html');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const gulpPath = require('path');
const fs = require('fs');
const htmlbeautify = require('gulp-html-beautify');


var getData = function (file) {
    var dataPath = gulpPath.resolve('data/data.json');
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
};
var htmlOptions = {
    indentSize: 4
};
module.exports = function(gulp, plugins, path){
    return function(){
        gulp.src(path.src.html)
            .pipe(data(getData))
            .pipe(nunjucksRender({
              path: [path.src.templates]
            }))
            .pipe(htmlbeautify(htmlOptions))
            .pipe(gulp.dest(path.build.html));
    }
};