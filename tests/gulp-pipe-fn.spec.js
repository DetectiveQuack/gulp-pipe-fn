'use strict';

const gulp = require('gulp'),
    gulpPipeFn = require('./../gulp-pipe-fn');

describe('gulp-pipe-fn', () => {

    it('should execute a functions in sequence', (done) => {
        let i = '';

        gulp.src([__dirname])
            .pipe(gulpPipeFn(() => { i += 1; }))
            .pipe(gulpPipeFn(() => { i += 2; }))
            .pipe(gulpPipeFn(() => { i += 3; }))
            .pipe(gulpPipeFn(() => {
                expect(i).toEqual('123');
                done();
            }));
    });

});