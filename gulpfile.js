const gulp = require("gulp"),
	  sass = require("gulp-ruby-sass"),
	  livereload = require("gulp-livereload"),
	  prefix = require("gulp-autoprefixer"),
	  imagemin = require('gulp-imagemin')
	  babel = require("gulp-babel");
	
	function errorLog(error) {
		console.error.bind(error);
		this.emit("end");
	}


gulp.task("styles", () => {
	sass("build/css/**/*.scss", {style: /*"expanded"*/"compressed"})
	.on("error", errorLog) 
	.pipe(prefix("last 3 versions"))
	.pipe(gulp.dest("dist/css"))
	.pipe(livereload());
});

gulp.task("script", () => {
	return gulp.src("build/js/main.js")
		.on("error", errorLog)
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(gulp.dest("dist/js"))
		.pipe(livereload());
});

gulp.task("document", () => {
	gulp.src("*.html")
	.on("error", errorLog)
	.pipe(livereload());
});

gulp.task('images', () =>
	gulp.src('build/img/*')
		.on("error", errorLog)
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'))
);

gulp.task("watch", () => {
	gulp.watch("build/css/**/*.scss", ["styles"]);
	gulp.watch("*.html", ["document"]);
	gulp.watch("build/img/*", ["images"]);
	gulp.watch("build/js/*", ["script"]);
	livereload.listen();
	
});

gulp.task('default', ["styles","document","images", "watch", "script"]);

