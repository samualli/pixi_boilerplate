'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var DEST = 'dist/';

gulp.task('default', function() {
    return gulp.src('scripts/*.js')
      //.pipe(gulp.dest(DEST))
      .pipe(concat('ftk_map-maker.js'))
      .pipe(uglify())
      .pipe(rename({ extname: '.min.js' }))
      .pipe(gulp.dest(DEST));

});
