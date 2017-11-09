const gulp = require('gulp')
const gulpServe = require('gulp-serve')

gulp.task('serve', gulpServe({
  root: [__dirname]
}))