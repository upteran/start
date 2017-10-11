'use strict';

module.exports = function(gulp, plugins, path){
    return function(){
        gulp.src(path.src.html) //Выберем файлы по нужному пути
            .pipe(plugins.rigger()) //Прогоним через rigger
            .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
            //.pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
    }
};