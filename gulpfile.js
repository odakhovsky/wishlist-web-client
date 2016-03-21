var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('scripts', function () {
    return gulp.src('app/**/*.js')
        .pipe(gulp.dest('./build/'))
        .pipe(reload({stream: true}));
});

gulp.task('html', function () {
    return gulp.src('./app/**/*.html')
        .pipe(reload({stream: true}));
});

gulp.task('browserSync', function () {
    browserSync({
        port: 8000,
        server: {
            baseDir: "./build/",
            routes: {
                '/node_modules': 'node_modules'
            }
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.html', ['html', 'build:copyApp']);
    gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/**/*.css', ['build:copyCss']);
});

gulp.task('build:copyApp', function () {
    return gulp.src('app/**/*.*')
        .pipe(gulp.dest('./build/'));
});

gulp.task('build:copyCss', function () {
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('./build/'))
        .pipe(reload({stream: true}));
});

gulp.task('build', ['build:copyApp']);
gulp.task('serve', ['build', 'scripts', 'html', 'browserSync', 'watch']);
