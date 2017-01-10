const gulp = require('gulp'),
    gulpPipeFn = require('./gulp-pipe-fn.js');

gulp.task('default', () => {
    gulp.src([]).pipe(gulpPipeFn((file, enc) => { console.log(file, enc) }));
});