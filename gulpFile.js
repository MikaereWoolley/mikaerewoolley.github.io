var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

gulp.task('default', () => {
    console.log('hello world');
});

gulp.task('html', () => {
    return gulp.src('index.hbs')
    .pipe(handlebars({}, {
        batch: ['./partials']
    }))
    .pipe(rename({
        extname: '.html'
    }))
    .pipe(gulp.dest('./'))
});