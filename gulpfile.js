'use-strict';
const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify'); 
const source = require('vinyl-source-stream');
const uglify = require('gulp-uglify');


const path = {
	ENTRY: './src/app.js',
	DEST: 'dest',
	OUT: 'bundle.js',
};

gulp.task('default', ()=>{});
gulp.task('buildjs', ()=>{
	browserify('./src/app.js')
	.transform("babelify", {presets: ['es2015', 'react']})
	.bundle()
	.pipe(source(path.OUT))
	.pipe(gulp.dest(path.DEST));
});


gulp.task('watch', ()=>{
	gulp.watch('./src/*.js', ['buildjs'])
});