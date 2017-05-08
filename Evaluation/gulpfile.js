/// <binding AfterBuild='watch' />
"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');


//style paths
var sassFiles = 'app/**/*.scss',
    cssDest = 'app';

gulp.task('sass', function () {
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function () {
    gulp.watch(sassFiles, ['sass']);
});

