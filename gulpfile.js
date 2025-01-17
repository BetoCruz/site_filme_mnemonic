const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
// const imagemin = require("gulp-imagemin");
// const uglify = require("gulp-uglify");

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./dist/css/'));
}

exports.default = gulp.parallel(styles);

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    
}