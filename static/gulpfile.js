
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function () {
  return gulp.src('./js/src/**/*.js')
    .pipe(browserify({
      debug: true,
      transform: 'debowerify'
    }))
    .pipe(gulp.dest('./js/dist/'));
});

gulp.task('js:watch', function () {
  gulp.watch('./js/src/**/*.js', ['js']);
});

gulp.task('css', function () {
  return gulp.src('./sass/app.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        './bower_components/foundation-sites/scss/',
        './bower_components/font-awesome/scss/',
        './bower_components/slick-carousel/slick/'
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'));
});

gulp.task('css:watch', function () {
  gulp.watch('./sass/**/*', ['css']);
});

gulp.task('fonts', function () {
  return gulp.src(
    [
      './bower_components/font-awesome/fonts/**/*',
      './bower_components/slick-carousel/slick/fonts/**/*'
    ])
    .pipe(gulp.dest('./fonts/'));
});

gulp.task('watch', ['js:watch', 'css:watch']);
gulp.task('default', ['js', 'css', 'fonts'])
