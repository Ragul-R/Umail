var gulp = require('gulp');
var sass = require('gulp-sass');
var liveHost = require('browser-sync').create();
var minify = require('gulp-clean-css');
var autoPrefixer = require('gulp-autoprefixer');

function scss(){
    return gulp.src('./scss/**/main.scss')
        .pipe(sass())
        .pipe(autoPrefixer({
            cascade: false
        }))
        .pipe(minify({compactability:'ie8'}))
        .pipe(gulp.dest('./css/'))
        .pipe(liveHost.stream());
}

function watch(){
    liveHost.init({
        server:{
            baseDir:'./'
        }
    });
    
    gulp.watch('./scss/**/*.scss',scss);
    gulp.watch('./*.html').on('change',liveHost.reload);
    gulp.watch('./js/*.js').on('change',liveHost.reload);
}
exports.scss = scss;
exports.watch = watch;