'use strict';

module.exports = {
	build: {
	    html: 'build/',
	    js: 'build/js/',
	    css: 'build/css/',
	    img: 'build/images/',
	    fonts: 'build/fonts/'
	},
	src: {
	    html: 'src/templates/**/*.html',
	    js: 'src/js/*.js',
	    style: 'src/style/style.css',
	    img: 'src/images/**/*.*',
	    fonts: 'src/fonts/**/*.*',
	    templates: 'src/templates',
	},
	watch: {
	    html: 'src/templates/**/*.html',
	    js: 'src/js/**/*.js',
	    style: 'src/style/**/*.css',
	    img: 'src/images/**/*.*',
	    fonts: 'src/fonts/**/*.*',
	    server: 'build/**/*.*'
	},
	clean: './build'
};