//importando depedencias
const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const lint = require('gulp-eslint');
const stylint = require('gulp-stylint');
const ghPages = require('gulp-gh-pages');

gulp.task('pug', () => {
	gulp.src('./src/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./out'))
		//quando houver alteracoes em arquivos pug, dará reload no servidor
		.pipe(connect.reload())
})

gulp.task('stylus', () => {
	gulp.src('./src/assets/styles/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./out/assets/styles'))
		//quando tiver alteracoes em arquivos stylus, dará reload no servidor
		.pipe(connect.reload())
})

gulp.task('stylint', () => {
	return gulp.src(['./src/assets/styles/*.styl', './src/assets/styles/modules/*.styl'])
		.pipe(stylint({
			config: '.stylintrc'
		}))
		.pipe(stylint.reporter())
		.pipe(connect.reload())
});

//passa o eslint nos arquivos js, para manter o padrao de código esperado, configurado em .eslintrc.json
gulp.task('lint', () => {
	gulp.src('./src/assets/scripts/script.js')
		.pipe(lint())
		.pipe(lint.format())
		.pipe(connect.reload())
})

//task babel, serve para transpilar o js em es6 para o es5 (versao que os browsers entendem hoje em dia)
gulp.task('babel', () => {
	gulp.src('./src/assets/scripts/script.js')
		.pipe(babel({
			//setando para qual versão do js ele ira transpilar o código
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./out/assets/scripts'))
		.pipe(connect.reload())
})

gulp.task('watch', () => {
	//1 param array com arquivo a serem escutado
	//2 param array com tarefa a ser executada
	gulp.watch(['./src/*.pug','./src/partials/*.pug','./src/layouts/*.pug'],['pug'])
	gulp.watch(['./src/assets/styles/*.styl','./src/assets/styles/modules/*.styl'],['stylint','stylus'])
	gulp.watch(['./src/assets/scripts/*.js'],['lint','babel'])
})

//criando servidor local
gulp.task('serve', () => {
	connect.server({
		//indica o caminho que sera disponivel para o servidor
		root: './out',
		//seta reload automatico
		livereload: true
	})
})

//usando imagemin para otimizar imagens
gulp.task('imagemin', () => {
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('out/assets/img/'))
})

//deploy automatizado, utilizando a gh pages do github
gulp.task('ghpages', () => {
  gulp.src('./out/**/*')
    .pipe(ghPages());
})

//tasks encadeadas
//gera todos arquivos, html+css+js+imagemin
gulp.task('build', ['pug','stylint','stylus','imagemin','lint','babel'])
//liga o servidor local, e escuta os arquivos
gulp.task('server', ['serve', 'watch'])
//atualiza todos os arquivos, e faz o deploy
gulp.task('deploy', ['build','ghpages'])
