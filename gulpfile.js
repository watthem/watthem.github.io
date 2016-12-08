const gulp = require('gulp');
const changed = require('gulp-changed');
const concatCss = require('gulp-concat-css');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

const SOURCE = './src/dev/style/*.css';
const DESTINATION = './src/pub/style/';
const APP_STYLESHEET = 'app.css';

const PUBFILE = DESTINATION + APP_STYLESHEET;

gulp.task('css', () => {
    return gulp.src(SOURCE)
        .pipe(autoprefixer({
            browsers: ['last 2 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
        }))
        .pipe(concatCss(APP_STYLESHEET))
        .pipe(gulp.dest(DESTINATION));
});

gulp.task('watch', function() {
    gulp.watch(SOURCE, ['css']);

})


gulp.task('default', ['css'], () => {
    return gulp.src(SOURCE)
        .pipe(changed(DESTINATION))
        .pipe(gulp.dest(DESTINATION));
});