var gulp = require('gulp'),
    through2 = require('through2'),
    gutil = require('gulp-util'),
    gulpPipeFn;

gulpPipeFn = function(fn) {
    if (!fn) {
        return new gutil.PluginError('gulp-pipe-fn', {
            message: 'No function passed in'
        });
    }

    return through2.obj(function(chunk, enc, callback) {
        fn.call(this, chunk, enc);
        return callback(null, chunk);
    });
}

module.exports = exports = gulpPipeFn;