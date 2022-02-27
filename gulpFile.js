var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var clean = require('gulp-clean-css');


gulp.task('index', () => {
    return gulp.src('*.hbs')
    .pipe(handlebars({}, {
        batch: ['./partials/hbs/']
    }))
    .pipe(rename({
        extname: '.html'
    }))
    .pipe(gulp.dest('./'))
});



gulp.task('sass', () => {
    return gulp.src('index.scss')
    .pipe(sass({}, {
        batch: ['./partials/index/styles']
    }))
    .pipe(clean())
    .pipe(gulp.dest('./'))
})

gulp.task('watch', () => {
    console.log('watching');
    gulp.watch('partials/hbs/*.hbs', gulp.series('index'));
    gulp.watch('./partials/styles/*.sass', gulp.series('sass'));
});

gulp.task('default', gulp.series('index', 'sass', 'watch'));
