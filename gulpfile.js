var gulp = require('gulp');
var concatCss = require('gulp-concat-css');


gulp.task('concat', function() {
    return gulp.src('./src/style/*.css')
        .pipe(concatCss("app.css"))
        .pipe(gulp.dest('./src/style/'));
});

gulp.task('default', ['concat']);