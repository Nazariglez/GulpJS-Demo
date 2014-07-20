var gulp = require('gulp'),
    uglify = require('gulp-uglifyjs'),
    less = require('gulp-less'),
    rename = require('gulp-rename');

var myScripts = 'src/**/*.js';
/*var myScripts = [
    'src/uno.js',
    'src/dos.js'
];*/
gulp.task('scripts', function(){
    return gulp.src(myScripts)
        .pipe(uglify('main.min.js')) //comprime a main.min.js
        .pipe(gulp.dest('./dist')); //Destino del nuevo fichero en el directorio ./dist
});

gulp.task('watch', function(){
    gulp.watch(myScripts, ['scripts']);
});

//Compila y renombra los ficheros less
gulp.task('css', function(){
    return gulp.src('src/main.less')
        .pipe(less()) //Compilamos
        .pipe(rename('compiled-style.css')) //Renombramos
        .pipe(gulp.dest('./dist')); //Indicamos destino
});

//Tarea que se ejecuta por defecto al usar "gulp" en la terminal
gulp.task('default', ['scripts', 'css', 'watch']);