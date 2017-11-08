# Curso Front-end na Prática

## Run the project locally

**1 -** Prepare the environment:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone the project and install the dependencies:
```sh
$ git clone 
$ cd front-end-na-pratica
$ npm install
```

**3 -** Run static server and livereload:

```sh
$ gulp server
```

## Stack
- Task Runner: [Gulp](http://gulpjs.com/)
- Html Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- Css Prepocessor: [Stylus](http://stylus-lang.com/)
- Local Server: [Gulp Connect](https://github.com/avevlad/gulp-connect)

## Tasks

- `$ gulp build`: Compile, contact and minify all files.
- `$ gulp server`: Watch the files to build and start a static server.