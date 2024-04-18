/* const gulp = require('gulp');
const image = require('gulp-image');

gulp.task('image', (done) => {
    gulp.src('./img*')
      .pipe(image({
        pngquant: true,
        optipng: false,
        zopflipng: true,
        jpegRecompress: false,
        mozjpeg: true,
        gifsicle: true,
        svgo: true,
        concurrent: 10
      }))
      .pipe(gulp.dest('./destino'));

    done();
  });

  gulp.task('default', ['image']); */

const sharp = require('sharp');
const fs = require('fs');

console.clear();
console.log('Iniciando con el proceso 👍');

const reducirTamanio = (nombreArchivo, tamanioNuevo = 750) => {
    return sharp(`./img/${nombreArchivo}`)
            .resize( tamanioNuevo ) // Inicia por el Ancho y calcula el Alto
            .toFile(`./build/${nombreArchivo}`)
}

fs.readdir('./img/', (error, listado) => {
    if( error ){
        console.log('Se presentó un error inesperado', error)
    }
    
    for (let index = 0; index < listado.length; index++) {
        setTimeout(() => {
            reducirTamanio(listado[index], 750)
        }, 1500)
    }
});

console.clear();
console.log('Finalicé con el proceso 👍');