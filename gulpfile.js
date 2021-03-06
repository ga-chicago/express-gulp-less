var gulp  = require('gulp');
var less  = require('gulp-less');
var watch = require('gulp-watch');

// watch task listen for saves on a specific file
//then runs, the task you want

gulp.task('watch', function(){
  // first argument is an array of files
  // second argument is an array of tasks to run
  // * is telling gulp to watch every file
  // in the folder with an extension of .less
  gulp.watch(['./styles/*.less'], ['compile-less'])
})
// how to write a basic gulp task
gulp.task('whatever', function(){
  console.log('the whatever task is running biotch')
})
gulp.task('compile-less', function(){
  // ./ starts you at the same level as whatever
  // file you are in
  gulp.src('./styles/style.less')
  .pipe(less())
  .pipe(gulp.dest('./styles/'))
})


// default task we are not making up the
// default name, second arg is an array of tasks to be run
gulp.task('default', ['compile-less', 'whatever', 'watch'])



// [
//   {
//     "name": "aruglaa",
//     "description": "green and leafy",
//     "yumminess": true,
//     "someArray": ["this is stuff", "I could be stuff", "were all star stuff"],
//     "carlSagan": "is dead"
//   },
//   {
//     "jerry": "seinfeld"
//   }
// ]
