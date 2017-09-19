var gulp = require('gulp');

var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
   return gulp.src(['helpers/**/*.js','routes/**/*.js','models/**/*.js', 'config/**/*.js', 'test/**/*.js' ])
   .pipe(jshint())
   .pipe(jshint.reporter('default'));
});

gulp.task('default',['jshint']);