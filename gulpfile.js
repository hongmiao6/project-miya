//导入插件
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const connect = require('gulp-connect');//热更新
const pump = require("pump");

// // 1、服务器配置
gulp.task("connect",function(){
    connect.server({
        // 端口号配置
        port : 8888,
        // 根目录配置
        root : "./dist",
        // 自动刷新
        livereload: true,
    });
});

gulp.task('php',()=>{
	return gulp
	.src('./src/php/*.json')
	.pipe(gulp.dest('./dist/php'))
})

// 转存任务至dist
gulp.task("html", () => {
	return gulp
	  .src("./src/html/*.html")
	  .pipe(gulp.dest("./dist/html"))
	  .pipe(connect.reload());
  });

//执行任务:转存css
gulp.task('sass',()=>{
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./dist/css'));
})
//转存js
gulp.task('js',()=>{
	return gulp.src('./src/js/*.js')
	.pipe(gulp.dest('./dist/js'));
})
//转存 压缩图片
gulp.task('img',()=>{
	gulp.src('./src/img/*.*')
	.pipe(imagemin())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/img'));
})


// 写完代码 执行npm run gulp build就可以压缩了
gulp.task("compress", function(cb) {
    pump([
        gulp.src('./src/js/*.js'),
        uglify(),
        gulp.dest('./dist/js')
	],
    cb
  );
});

gulp.task("build", ["compress"]);

gulp.task('watch',()=>{
	gulp.watch("./src/html/*.html", ["html"]);
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/js/*.js',['js']);
	gulp.watch('./src/img/*.*',['img']);
	gulp.watch('./src/php/*.json',['php']);
 })

//添加default关键字  实现同时监听再开启服务器功能
gulp.task("default",["watch","connect"]);
