Invoke a function in a gulp.pipe.

# Usage
```javascript
const gulp = require('gulp'),
    gulpPipeFn = require('gulp-pipe-fn');

gulp.task('default', () => {
    gulp.src(['./*'])
        .pipe(gulpPipeFn((file, enc) => { console.log(file, enc) }));
});
```