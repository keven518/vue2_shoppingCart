var gulp = require('gulp');
const browserSync = require('browser-sync').create(); //实时刷新
const reload = browserSync.reload;
gulp.task('default',function () {
    browserSync.init({
        server:{
            baseDir:'./'  //设置服务器的根目录
        },
        logLevel: "debug",
        logPrefix:"dev",
        browser:'chrome',
        notify:false //开启静默模式
    });
    //使用gulp的监听功能，实现编译修改过后的文件
    gulp.watch(('*.html')).on('change',reload);
    gulp.watch(('js/lib/*.js')).on('change',reload);
});