'use strict';

var gulp = require('gulp'),
	watch = require('gulp-watch'),
    fs = require('fs'),

    cssimport = require("gulp-cssimport"),
    postcss    = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    stylelint = require('stylelint'),
    stylelintConfig = require('./stylelint.config.js'),
    cssnano = require('cssnano'),
    modules = require('postcss-modules');

var path = {
    build: {
        html: 'build/',
        css:  'build/css/'
    },
    src: {
        html:  'src/html/*.html',
        css:   'src/css/main.css'
    },
    watch: {
        html:   'src/html/*.html',
        css:    'src/css/*.css'
    }
};

gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html));
});

gulp.task('css:build', function () {
    gulp.src(path.src.css)
        .pipe(cssimport({}))
        .pipe(postcss([
            stylelint(stylelintConfig),
            modules({
                getJSON: function(cssFileName, json) {
                    var path = require('path'),
                        cssName = path.basename(cssFileName, '.css'),
                        jsonFileName  = path.resolve('./src/js/stylesConfig.json');

                    fs.writeFileSync(jsonFileName, JSON.stringify(json));
                }
            }),
            autoprefixer({browsers: ['last 2 versions']}),
            cssnano()
        ]))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('build', [
    'html:build',
    'css:build'
]);

gulp.task('watch', function () {
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });

    watch([path.watch.css], function(event, cb) {
        gulp.start('css:build');
    });
});

//alias gulp='node_modules/.bin/gulp'
gulp.task('default', ['build',  'watch']);
