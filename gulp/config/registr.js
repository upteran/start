'use strict';

module.exports = {
	build: { //Тут мы укажем куда складывать готовые после сборки файлы
	    html: 'build/',
	    js: 'build/js/',
	    css: 'build/css/',
	    img: 'build/images/',
	    fonts: 'build/fonts/'
	},
	src: { //Пути откуда брать исходники
	    html: 'src/*.pug',
	    js: 'src/js/*.js',
	    style: 'src/style/style.css',
	    img: 'src/images/**/*.*',
	    fonts: 'src/fonts/**/*.*'
	},
	watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
	    html: 'src/**/*.pug',
	    js: 'src/js/**/*.js',
	    style: 'src/style/**/*.css',
	    img: 'src/images/**/*.*',
	    fonts: 'src/fonts/**/*.*',
	    server: 'build/**/*.*'
	},
	clean: './build'
};