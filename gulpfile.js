var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var useref = require('gulp-useref');

// Static Server + watching scss/html files
gulp.task('dev', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./scss/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("./js/**/*.js").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('last 3 versions'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});

gulp.task('images', () =>
    gulp.src('img/src/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'))
);

gulp.task('default', ['dev']);
