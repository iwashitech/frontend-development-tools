const gulp = require("gulp");
const concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src([
    './lib/foo.js',
    './lib/not-exist.js',
    './lib/bar.js',
    './lib/baz.js'
  ])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./dist/'));
});