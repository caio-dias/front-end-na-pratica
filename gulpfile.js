var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');

gulp.task('pug', function() {
	gulp.src('./src/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./out'))
		//quando tiver auteracoes em arquivos pug, dará reload no servidor
		.pipe(connect.reload())
})

gulp.task('stylus', function() {
	gulp.src('./src/assets/styles/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./out/assets/styles'))
		//quando tiver auteracoes em arquivos stylus, dará reload no servidor
		.pipe(connect.reload())
})

gulp.task('watch', function() {
	//1 param array com arquivo a serem escutado
	//2 param array com tarefa a ser executada
	gulp.watch(['./src/*.pug','./src/partials/*.pug','./src/layouts/*.pug'],['pug'])
	gulp.watch(['./src/assets/styles/*.styl','./src/assets/styles/modules/*.styl'],['stylus'])
})

//criando servidor local
gulp.task('serve', function() {
	connect.server({
		//indica o caminho que sera disponivel para o servidor
		root: './out',
		//seta reload automatico
		livereload: true
	})
})

//usando imagemin para otimizar imagens
gulp.task('imagemin', function() {
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('out/assets/img/'))
})

//tasks encadeadas
gulp.task('build', ['pug','stylus','imagemin'])
gulp.task('server', ['serve', 'watch'])