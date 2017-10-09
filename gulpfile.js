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
    htmlmin = require('gulp-htmlmin'),
    runSequence = require('run-sequence');

const config = {
    scssPath: './assets/css/**/*.scss',
    htmlPath: './*.html',
    jsFiles: ['./assets/js/*.js', './assets/js/template/*.js'],
    bundleJsFiles: ['./assets/js/*.js'],
    cssDest: './assets/css/',
    cssPath: './assets/css/**/*.css',
    criticalCssPath: './assets/css/critical.css',
    jsTemplateDir: './build/js/'
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

gulp.task('critical-css', ['scripts', 'remove-index', 'sass'], function() {
    gulp.src(['./index-template.html'])
      .pipe(replace('/*CRITICALCSS*/', function(match) {
          return fs.readFileSync(config.criticalCssPath, "utf8");
      }))
      .pipe(replace('/*GA_JS*/', function(match) {
        return fs.readFileSync(config.jsTemplateDir + 'template-ga.js', "utf8");
      }))
      .pipe(replace('/*RESIZE_HOME_JS*/', function(match) {
        return fs.readFileSync(config.jsTemplateDir + 'template-resize-home.js', "utf8");
      }))
      .pipe(replace('/*LOAD_CSS_JS*/', function(match) {
        return fs.readFileSync(config.jsTemplateDir + 'template-load-css.js', "utf8");
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

gulp.task('scripts', (done) => {
    runSequence(
        'uglify-js',
        'bundle-js',
        done
    );
})


gulp.task('uglify-js', (cb) => {
    pump([
        gulp.src(config.jsFiles),
        babel({
            presets: ['env']
        }),
        uglify(),
        gulp.dest('./build/js/')
    ], cb);
});

gulp.task('bundle-js', (cb) => {
    pump([
        gulp.src(['./build/js/custom.js', './build/js/game.js']),
        concat('bundle.js'),
        gulp.dest('./dist')
    ], cb);
})

gulp.task('default', ['serve']);