'use strict'

const
  gulp = require('gulp')
  ,babel = require('gulp-babel')
  ,eslint = require('gulp-eslint')

// babel
gulp.task('babel', ()=>{
  return gulp.src(['src/**/*.js'])
  .pipe(babel())
  .pipe(gulp.dest('dist/'))
})

// lint
gulp.task('lint', ()=>{
  return gulp.src(['src/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format('node_modules/eslint-friendly-formatter'))
})

// dev
gulp.task('dev', ()=>{
  gulp.watch('src/**/*.js', ['babel'])
})

// build
gulp.task('build', ['lint', 'babel'])
