const gulp = require('gulp');
const clean = require('gulp-clean'); /*done */
const concatCss = require('gulp-concat-css');/*done */
const watch = require('gulp-watch'); 
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();/*done */


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });

});

const proccesHTML = function () {
    return src('*.html')
    .pipe(dest('dist/'));
}
const proccesImages = function () {
    return src('src/images/**')
    .pipe(dest('dist/images/'));
}
const proccesStyles = function () {
    return src('*src/css/**')
    .pipe(dest('dist/css'));
}

gulp.task('clean', function () {
    gulp.src('./dist/**/*', {read: false})
        .pipe(clean());
});

gulp.task('concat', function () {
  return gulp.src('src/**/*.css')
    .pipe(concatCss("styles/bundle.css"))
    .pipe(gulp.dest('dist/css/'));
});


  gulp.task('autoprefix', () =>
    gulp.src('src/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('stream', function () {
    return watch('css/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('images', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('watch' ['concat','autoprefix', 'images'], function(){
gulp.watch('src/css/**/*.css', ['concat']);
gulp.watch('src/*.html',['copy', browserSync.reload]);
})

gulp.task('default',['watch']);