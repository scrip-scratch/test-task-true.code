import changed from "gulp-changed";

export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(changed(app.path.build.images))
    .pipe(app.gulp.dest(app.path.build.images));
};
