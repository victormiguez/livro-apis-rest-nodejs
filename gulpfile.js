var gulp = require('gulp');
var changed = require('gulp-changed');
var babel = require('gulp-babel');

var path = require('path');

var paths = {
  source: ['source/**/*.js'],
  build: 'build',
  sourceRoot: path.join(__dirname, 'source')
};

gulp.task('babel', function () {
  return gulp.src(paths.source)
    .pipe(changed(paths.build))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.build));
});

gulp.task('build', ['babel']);

gulp.task('watch', function() {
  gulp.watch(paths.source, ['babel']);
});

gulp.task('default', ['watch']);
