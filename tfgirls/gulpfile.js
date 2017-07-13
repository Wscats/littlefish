var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
gulp.task("concat", function() {
	gulp.src(["js/base.js", "js/routes.js", "js/services.js", "js/bootstrap.js"])
		.pipe(concat("core.js"))
		.pipe(uglify())
		.pipe(gulp.dest("dist/js"))
})
gulp.task("default", ["concat"])