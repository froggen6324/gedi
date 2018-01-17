//引入gulp模块
var gulp = require("gulp");
//引入插件
var sass = require("gulp-sass");
var rename = require("gulp-rename");
//布置任务
gulp.task("sass",function(){
	return gulp.src("css/1.scss")
	           .pipe(sass())
	           .pipe(rename("style.css"))
	           .pipe(gulp.dest("css"));
})
gulp.task("watch",function(){
	return gulp.watch("css/1.scss",["sass"]);
})
