var gulp = require("gulp");
var run = require('gulp-run');
var clean = require('gulp-clean');
var mocha = require('gulp-mocha');

gulp.task("build", function () {
    return run("tsc").exec().pipe(gulp.dest("output"))
});

gulp.task("clean", function () {
    return gulp.src('./build/', {read: false})
        .pipe(clean());
});

gulp.task("run", function () {
    run("node ./build/app.js").exec().pipe(gulp.dest("output"))
});

gulp.task("test", function () {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({
            reporter: 'spec',
            globals: {
                should: require('should')
            }
        }))
});