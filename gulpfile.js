const gulp        = require('gulp'),
    concat        = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    sass        = require('gulp-sass'),
    uglify = require('gulp-uglify-es').default,
    pump = require('pump'),
    replace = require('gulp-replace'),
    rename = require("gulp-rename"),
    babel = require('gulp-babel')
    fs = require('fs'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    del = require('del'),
    htmlmin = require('gulp-htmlmin');

const config = {
    scssPath: './assets/css/**/*.scss',
    htmlPath: './*.html',
    jsFiles: './assets/js/**/*.js',
    cssDest: './assets/css/',
    cssPath: './assets/css/**/*.css',
    criticalCssPath: './assets/css/critical.css'
}


gulp.task('sass', function (cb) {  
    pump([
        gulp.src(config.scssPath),
        sass(),
        autoprefixer('last 2 version'),
        cleanCSS(),
        gulp.dest(config.cssDest)
    ], cb);
  });

gulp.task('css', function () {
return gulp.src(config.cssPath)
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('remove-index', function (done) { // ok
    del.sync(['index.html']);
    done();
});

gulp.task('critical-css', ['remove-index', 'sass'], function() {
    gulp.src(['./index-template.html'])
      .pipe(replace('/*CRITICALCSS*/', function(match) {
          return fs.readFileSync(config.criticalCssPath, "utf8");
      }))
      .pipe(rename('index.html'))
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('./'));
   });

gulp.task('build', ['critical-css']);


// Static Server + watching scss/html files
gulp.task('serve', ['build'], function() {

    browserSync.init({
        server: "./",
        port: 3001
    });

    // CSS
    gulp.watch(config.cssPath, ['css']);
    gulp.watch(config.scssPath, ['sass']);

    // HTML
    gulp.watch('./index.html').on('all', () => { browserSync.reload() });
    gulp.watch('./index-template.html', ['critical-css']);
    
    // JS
    gulp.watch(config.jsFiles, ['scripts', browserSync.reload]);
});

// Compile sass into CSS & auto-inject into browsers




gulp.task('scripts', (cb) => {
    pump([
        gulp.src(config.jsFiles),
        concat('bundle.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('default', ['serve']);