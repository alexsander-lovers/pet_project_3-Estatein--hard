export const copyFiles = () => {
  return app.gulp.src(app.path.source.files)
    .pipe(app.gulp.dest(app.path.build.files));
};

export const copyManifest = () => {
  return app.gulp.src(app.path.source.manifest)
    .pipe(app.gulp.dest(app.path.build.manifest));
};

export const copyVideo = () => {
  return app.gulp.src(app.path.source.video, { encoding: false })
    .pipe(app.gulp.dest(app.path.build.video))
    .pipe(app.plugins.browsersync.stream());
}

export const copyFavicons = () => {
  return app.gulp.src(`${app.path.source.favicons}`, { encoding: false })
    .pipe(app.gulp.dest(`${app.path.build.favicons}`))
    .pipe(app.plugins.browsersync.stream());
};

export const copyFonts = () => {
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.{woff,woff2}`, { encoding: false })
    .pipe(app.gulp.dest(`${app.path.build.fonts}`));
};
