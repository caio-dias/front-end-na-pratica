# Curso Front-end na Prática

[![Build Status](https://travis-ci.org/caio-dias/front-end-na-pratica.svg?branch=master)](https://travis-ci.org/caio-dias/front-end-na-pratica)
[![devDependencies Status](https://david-dm.org/caio-dias/front-end-na-pratica/dev-status.svg)](https://david-dm.org/caio-dias/front-end-na-pratica?type=dev)
## Run the project locally

**1 -** Prepare the environment:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone the project and install the dependencies:
```sh
$ git clone git@github.com:caio-dias/front-end-na-pratica.git
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
- Css Prepocessor: [Stylus](http://stylus-lang.com)
- Local Server: [Gulp Connect](https://github.com/avevlad/gulp-connect)
- Image Minifier [Gulp Imagemin](https://www.npmjs.com/package/gulp-imagemin)
- JS Transpiler [Babel](https://www.babeljs.io) 
- JS Linter [ESLint](https://github.com/adametry/gulp-eslint)
- CSS Linter [Stylint](https://github.com/danielhusar/gulp-stylint)

## Tasks

- `$ gulp build`: Compile, contact and minify all files/images.
- `$ gulp server`: Watch the files to build and start a static server.