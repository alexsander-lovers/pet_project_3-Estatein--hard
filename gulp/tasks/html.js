import fileInclude from 'gulp-file-include';
import versionNumber from 'gulp-version-number';
import htmlMin from 'gulp-htmlmin';

export const html = () => {
  return app.gulp.src(app.path.source.html)
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'HTML',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(fileInclude())
    .pipe(app.plugins.if(app.isBuild, versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to': ['css', 'js']
        },
        'output': {
          'file': 'gulp/version.json'
        }
    })))
    .pipe(app.plugins.if(app.isBuild, htmlMin({
      collapseWhitespace: true,
      removeComments: true
    })))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
