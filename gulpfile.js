global.$ = {
    gulp:   require('gulp'),
    gp:     require('gulp-load-plugins')(),
    bs:     require('browser-sync').create(),
    path:{
        tasks:      require('./gulp/config/tasks'),
        serverDir:  './app/build',  
        src:{
            html:   './app/src/*.html',
            css:    './app/src/styles/*.*',
            js:     './app/src/scripts/*.js',
            img:    './app/src/images/*.{png,jpg,jfif,jpeg,webp}',
            fonts:  './app/src/fonts/**/*.*'
        },
        build:{
            html:   './app/build/',
            css:    './app/build/styles/',
            js:     './app/build/scripts/',
            img:    './app/build/images/',
            fonts:  './app/build/fonts/'
        },
        watch:{
            html:   ['./app/src/*.html','./app/src/views/*.html'],
            css:    './app/src/styles/**/*.*',
            js:     './app/src/scripts/*.*',
            img:    './app/src/images/**/*.*',
            fonts:  './app/src/fonts/**/*.*',
        }
    }
}

$.path.tasks.forEach(oneTask=>require(oneTask)());

$.gulp.task('default', $.gulp.series($.gulp.parallel('html', 'css', 'js', 'img', 'fonts', 'watch', 'serve')))
$.gulp.task('build', $.gulp.series($.gulp.parallel('html', 'css', 'js', 'img', 'fonts')))