var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var chwatch = require('gulp-chokidar')(gulp);

gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
});


gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
  //gulp.watch('scss/**/*.scss', ['sass']);
});




gulp.task('chwatch', function(){
  chwatch('scss/**/*.scss', gulp.series('sass'));
});



gulp.task('proba', function(done) {
    // Ciało naszego zadania.
    console.log("ok - proba");
    done();
});

