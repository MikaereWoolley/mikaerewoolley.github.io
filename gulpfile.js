var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var clean = require('gulp-clean-css');
gulp.task('default', (done) => {
    console.log('hello world');
    done();
});

gulp.task('html', () => {
    return gulp.src('index.hbs')
    .pipe(handlebars({}, {
        batch: ['./partials/hbs']
    }))
    .pipe(rename({
        extname: '.html'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('styles', () => {
    return gulp.src('*.scss')
    .pipe(sass({}, {
        batch: ['./partials/styles']
    }))
    .pipe(clean())
    .pipe(gulp.dest('./'));
});


gulp.task('watch', function() {
    gulp.watch('./partials/hbs/*hbs', gulp.series('html'));
    gulp.watch('./partials/styles/*sass', gulp.series('styles'));
});