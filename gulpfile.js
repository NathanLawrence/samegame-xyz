var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat');

var jsSources = ['src/js/samegame.js','src/js/lib/snap.js'];
var htmlSources = ['src/index.html'];
var cssSources = ['src/css/bootstrap.css'];

gulp.task('compile-dev', function(){
	gulp.src(htmlSources)
		.pipe(gulp.dest('builds/development'));
});

gulp.task('js-dev', function(){
	gulp.src(jsSources)
		.pipe(concat('iframer.js'))
		.pipe(gulp.dest('builds/development/js'));
});