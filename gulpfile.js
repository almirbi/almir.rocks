const gulp = require("gulp"),
  concat = require("gulp-concat"),
  browserSync = require("browser-sync").create(),
  sass = require("gulp-sass"),
  uglify = require("gulp-uglify"),
  pump = require("pump"),
  replace = require("gulp-replace"),
  rename = require("gulp-rename"),
  babel = require("gulp-babel");
(fs = require("fs")),
  (cleanCSS = require("gulp-clean-css")),
  (autoprefixer = require("gulp-autoprefixer")),
  (del = require("del")),
  (htmlmin = require("gulp-htmlmin")),
  (runSequence = require("run-sequence")),
  (sourcemaps = require("gulp-sourcemaps"));

const config = {
  scssPath: "./src/assets/css/**/*.scss",
  htmlPath: "./src/*.html",
  jsFiles: ["./src/assets/js/*.js", "./src/assets/js/template/*.js"],
  bundleJsFiles: ["./assets/js/*.js"],
  cssDest: "./dist/assets/css/",
  cssPath: "./dist/assets/css/**/*.css",
  criticalCssPath: "./dist/assets/css/critical.css",
  jsTemplateDir: "./dist/build/js/",
};

gulp.task("sass", function (cb) {
  pump(
    [
      gulp.src(config.scssPath),
      sass(),
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      }),
      cleanCSS(),
      gulp.dest(config.cssDest),
    ],
    cb
  );
});

gulp.task("generate-service-worker", function (callback) {
  var swPrecache = require("sw-precache");
  var rootDir = "./dist/";

  swPrecache.write(
    `${rootDir}/sw.js`,
    {
      staticFileGlobs: [
        "./src/cache-polyfill.js",
        "./dist/index.html",
        "./src/manifest.json",
        "//fonts.googleapis.com/css?family=Raleway:300,800",
        "//fonts.googleapis.com/css?family=Rock+Salt:400",
        rootDir + "/assets/bootstrap/**/*.*",
        rootDir + "/assets/css/**/*.*",
        rootDir + "/assets/fonts/**/*.*",
        rootDir + "/assets/images/**/*.*",
        rootDir + "/dist/**/*.*",
      ],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\//,
          handler: "cacheFirst",
        },
      ],
    },
    callback
  );
});

gulp.task("css", function () {
  return gulp.src(config.cssPath).pipe(browserSync.reload({ stream: true }));
});

gulp.task("remove-index", function (done) {
  // ok
  del.sync(["index.html"]);
  del.sync(["index-dev.html"]);
  done();
});

gulp.task("critical-css", ["scripts", "remove-index", "sass"], (done) => {
  pump(
    [
      gulp.src(["./src/index-template.html"]),
      replace("/*CRITICALCSS*/", function (match) {
        return fs.readFileSync(config.criticalCssPath, "utf8");
      }),
      replace("/*GA_JS*/", function (match) {
        return fs.readFileSync(config.jsTemplateDir + "template-ga.js", "utf8");
      }),
      replace("/*SW_JS*/", function (match) {
        return fs.readFileSync(config.jsTemplateDir + "template-sw.js", "utf8");
      }),
      replace("/*RESIZE_HOME_JS*/", function (match) {
        return fs.readFileSync(
          config.jsTemplateDir + "template-resize-home.js",
          "utf8"
        );
      }),
      replace("/*LOAD_CSS_JS*/", function (match) {
        return fs.readFileSync(
          config.jsTemplateDir + "template-load-css.js",
          "utf8"
        );
      }),
      rename("index.html"),
      htmlmin({ collapseWhitespace: true, minifyJS: true }),
      gulp.dest("./dist/"),
    ],
    done
  );
});

gulp.task("build", (done) => {
  runSequence("critical-css", "reload-browser", done);
});

gulp.task("reload-browser", (done) => {
  browserSync.reload();
  done();
});

// Static Server + watching scss/html files
gulp.task("serve", ["build", "generate-service-worker"], function () {
  browserSync.init({
    server: {
      baseDir: "./dist/",
      index: "index.html",
    },
    port: 3001,
  });

  // CSS
  gulp.watch(config.cssPath, ["css"]);
  // gulp.watch(config.scssPath, ['sass']);

  // HTML
  gulp.watch("./src/index-template.html", ["build"]);
  gulp.watch(config.jsFiles, ["build"]);
  gulp.watch(config.jsFiles, ["build"]);
  gulp.watch(config.scssPath, ["build"]);

  // JS
});

// Compile sass into CSS & auto-inject into browsers

gulp.task("scripts", (done) => {
  runSequence("transpile-js", "uglify-js", "bundle-js", done);
});

gulp.task("transpile-js", (cb) => {
  pump(
    [
      gulp.src(config.jsFiles),
      // sourcemaps.init(),
      babel({
        presets: ["env"],
      }),
      // sourcemaps.write(),
      gulp.dest("./dist/build/js/"),
    ],
    cb
  );
});

gulp.task("uglify-js", (cb) => {
  pump(
    [
      gulp.src("./dist/build/js/**/*.js"),
      // sourcemaps.init({loadMaps: true}),
      uglify(),
      // sourcemaps.write(),
      gulp.dest("./dist/build/js/"),
    ],
    cb
  );
});

gulp.task("bundle-js", (cb) => {
  pump(
    [
      gulp.src(["./dist/build/js/custom.js", "./dist/build/js/game.js"]),
      // sourcemaps.init({loadMaps: true}),
      concat("bundle.js"),
      // sourcemaps.write(),
      gulp.dest("./dist/dist"),
    ],
    cb
  );
});

gulp.task("default", ["serve"]);
