const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync").create();

// Paths
const paths = {
  pug: {
    src: "src/pug/**/*.pug",
    dest: "dist/",
  },
  scss: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
  },
  js: {
    src: "src/js/**/*.js",
    dest: "dist/js/",
  },
  img: {
    src: "src/img/**/*",
    dest: "dist/img/",
  },
  fonts: {
    src: "src/fonts/**/*",
    dest: "dist/fonts/",
  },
};

// Compile Pug templates
function pugTask() {
  return gulp
    .src(paths.pug.src)
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(gulp.dest(paths.pug.dest))
    .pipe(browserSync.stream());
}

// Compile SCSS
function scssTask() {
  return gulp
    .src(paths.scss.src)
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// Process JS
function jsTask() {
  return gulp
    .src(paths.js.src)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

// Copy images
function imgTask() {
  return gulp.src(paths.img.src, { encoding: false }).pipe(gulp.dest(paths.img.dest));
}

// Copy fonts
function fontsTask() {
  return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest));
}
// Browser Sync
function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  gulp.watch(paths.pug.src, pugTask);
  gulp.watch(paths.scss.src, scssTask);
  gulp.watch(paths.js.src, jsTask);
  gulp.watch(paths.img.src, imgTask);
  gulp.watch(paths.fonts.src, fontsTask);
}

// Tasks
exports.pug = pugTask;
exports.scss = scssTask;
exports.js = jsTask;
exports.img = imgTask;
exports.fonts = fontsTask;
exports.serve = serve;

// Build task
exports.build = gulp.parallel(pugTask, scssTask, jsTask, imgTask, fontsTask);

// Default task
exports.default = gulp.series(exports.build, serve);
