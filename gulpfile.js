'use-strict';
const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify'); 
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

const path = {
	ENTRY: './src/app.js',
	JS_DEST: 'dest/js',
  CSS_DEST: 'dest/css',
	OUT: 'bundle.js',
};

gulp.task('default', ()=>{});
gulp.task('buildjs', ()=>{
	browserify('./src/app.js', {debug: true})
	.transform("babelify", {presets: ['es2015', 'react']})
	.bundle()
	.pipe(source(path.OUT))
	.pipe(gulp.dest(path.JS_DEST));
});


gulp.task('sass', ()=>{
  gulp.src('./src/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dest'))
});

gulp.task('watch', ()=>{
	gulp.watch('./src/*.js', ['buildjs']);
  gulp.watch('./src/**/*.scss', ['sass']);
});