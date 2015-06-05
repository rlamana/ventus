var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    amdOptimize = require("amd-optimize"),
    concat = require('gulp-concat'),
    wrap = require('gulp-wrap'),
    less = require('gulp-less'),
    autoprefix = require('gulp-autoprefixer'),
    handlebars = require('gulp-handlebars'),
    declare = require('gulp-declare'),
    defineModule = require('gulp-define-module'),
    del = require('del'),
    mochaPhantomJS = require('gulp-mocha-phantomjs');

var paths = {
    build: 'dist',
    source: 'src',
    vendor: 'vendor'
};

var package = require('./package.json'),
    jshintConfig = require('./jshint.json');

gulp.task('compile:dev', function() {
    return gulp.src([
            paths.vendor + '/almond',
            paths.vendor + '/handlerbars',
            paths.vendor + '/underscore',
            paths.source + '/**/*.js'
        ])
        .pipe(jshint(jshintConfig))
        .pipe(jshint.reporter('default'))
        .pipe(amdOptimize(paths.source + '/main', {
            paths: {
                'almond': paths.vendor + '/almond',
                'underscore': paths.vendor + '/underscore',
                'handlebars': paths.vendor + '/handlebars',
                '$': 'empty:'
            }
        }))
        .pipe(concat(package.name.toLowerCase() + '.js'))
        .pipe(wrap({
            src: paths.source + '/lib.template'
        }))
        .pipe(gulp.dest(paths.build));
});

gulp.task('compile:prod', ['compile:dev'], function() {
    return gulp.src(paths.build + '/' + package.name.toLowerCase() + '.js')
        .pipe(uglify({
            preserveComments: 'some'
        }))
        .pipe(concat(package.name.toLowerCase() + '.min.js'))
        .pipe(gulp.dest(paths.build));
});

gulp.task('compile', ['compile:prod']);


gulp.task('less', function () {
   gulp.src(paths.source + '/**/*.less')
      .pipe(less())
      .pipe(autoprefix('last 2 version', 'ie 9'))
      .pipe(concat(package.name.toLowerCase() + '.css'))
      .pipe(gulp.dest(paths.build));
});


gulp.task('templates', function(){
  gulp.src(paths.source + '/**/*.hbs')
    .pipe(handlebars())
    .pipe(defineModule('amd'))
    .pipe(gulp.dest(paths.source));
});


gulp.task('watch', ['default'], function() {
    gulp.watch([
        paths.source + '/**/*.js',
        paths.source + '/lib.template'
    ], ['compile']);
    gulp.watch(paths.source + '/**/*.less', ['less']);
    gulp.watch(paths.source + '/**/*.hbs', ['templates', 'compile']);
});


gulp.task('clean', function () {
    del([paths.build]);
});

gulp.task('test', ['compile'], function() {
    gulp.src('test/run.html')
        .pipe(mochaPhantomJS());
});

gulp.task('default', ['less', 'templates', 'compile']);
