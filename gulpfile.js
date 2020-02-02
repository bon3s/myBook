const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const cleanCSS = require("gulp-clean-css");

gulp.task('styles', () => {
    return gulp.src('./src/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('clean', () => {
    return del([
        '/src/assets/css/main.css',
    ]);
});
gulp.task('watch', function(){
    return gulp.watch('src/assets/scss/**/*.scss', gulp.series('styles'))
    // Other watchers
});

gulp.task('default', gulp.series(['clean', 'styles']));