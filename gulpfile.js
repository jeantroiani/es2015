var gulp = require("gulp");
var babel = require("gulp-babel");

var srcJs = './src/app.js';

gulp.task("babelify", function () {
  return gulp.src(srcJs)
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', function () {
	 gulp.watch([srcJs, './src/modules/**/*.js'], ['babelify']);
});

// CLI task
gulp.task("dev", ['babelify', 'watch']);