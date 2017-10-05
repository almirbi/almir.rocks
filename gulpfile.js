var gulp        = require('gulp');
var concat        = require('gulp-concat');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var uglify = require('gulp-uglify-es').default;
var pump = require('pump');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./",
        port: 3001
    });

    gulp.watch("./assets/css/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("./assets/js/*.js",['scripts', browserSync.reload]);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./assets/css/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./assets/css/"))
        .pipe(browserSync.stream());
});

gulp.task('scripts', (cb) => {
    pump([
        gulp.src('assets/js/*.js'),
        concat('bundle.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('default', ['serve']);