const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('build/css'))
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
});