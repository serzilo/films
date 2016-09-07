'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),

    stylus = require('gulp-stylus'),
    prefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,

    args = require('yargs').argv,
    gulpif = require('gulp-if');


var path = {
    build: {
        html: 'build/',
        css:  'build/css/',
        js:   'build/js/',
        jsBundleName: 'bundle.js'
    },
    src: {
        html:  'src/html/*.html',
        css:   'src/css/main.styl',
        js:    'src/js/app.js'
    },
    watch: {
        html:   'src/html/*.html',
        css:    'src/css/main.styl',
        js:     'src/js/**/*.(js|jsx)'
    }
};

var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Local host"
};


gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});


gulp.task('js:build', function () {
    /*
    gulp --env dev
    gulp --env prod
    gulp // default dev
    */

    var env = args.env || 'dev',
        settings = {
            dev: {
                browserify: {debug: true}
            },
            prod: {
                browserify: {}
            }
        };


    return browserify(path.src.js, settings[env].browserify)
        .transform(reactify)
        .bundle()
        .pipe(source(path.build.jsBundleName))
        .pipe(buffer())
        .pipe(gulpif(env != 'dev', uglify()))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('css:build', function () {
    gulp.src(path.src.css)
        .pipe(stylus())
        .pipe(prefixer())
        .pipe(cssmin())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'css:build',
    'js:build'
]);

gulp.task('watch', function () {
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });

    watch([path.watch.css], function(event, cb) {
        gulp.start('css:build');
    });

    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});


gulp.task('default', ['build', 'webserver', 'watch']);
//alias gulp='node_modules/.bin/gulp'
//gulp.task('default', ['build',  'watch']);
