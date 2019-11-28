const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');


const source = 'styles/main.scss';
const destination = './styles';

gulp.task('sass', () =>
gulp.src(source)
.pipe(sass())
.pipe(gulp.dest(destination))
);

gulp.task('prefix', () =>
gulp.src(destination+'/main.css')
.pipe(autoprefixer({
  cascade: false
}))
.pipe(gulp.dest(destination))
);

gulp.task('minicss', () =>
gulp.src('styles/*.css')
.pipe(cleanCSS({compatibility: 'ie8'}))
.pipe(gulp.dest(destination))
);

//Runs all tasks one after another
gulp.task('default', gulp.series('sass', 'prefix', 'minicss'));
