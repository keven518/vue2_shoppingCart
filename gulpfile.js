var gulp = require('gulp');
var browserSync = require('browser-sync');
// Static server
gulp.task('default', function() {
    browserSync({
        server: {
            //指定服务器启动根目录
            baseDir: "./",
            index: './cart.html' 
        },
          logLevel: "debug",
          logPrefix:"dev",
          browser:'chrome',
          notify:false //开启静默模式
    });
    //监听任何文件变化，实时刷新页面
    gulp.watch("./**/*.*").on('change', browserSync.reload);
    //gulp.watch('./sass/**/*.scss',['sass-reload']);
    //gulp.watch(('./*.html')).on('change',reload);
});