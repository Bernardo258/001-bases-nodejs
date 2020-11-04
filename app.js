const argv = require('yargs')
    .command('listar', 'imprime en pantalla la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
const multiplicar = require('./multiplicacion/multiplicacion');

let comando = argv._[0];

let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':

        multiplicar.listarTabla(base, limite)
            .then()
            .catch(error => console.log(`Ocurrio un error ${error}`));
        // console.log('Usted eligio listar');
        break;
    case 'crear':
        multiplicar.crearArchivo(base, limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido generado con exito`))
            .catch(error => console.log(`Ocurrio un error ${error}`));
        // console.log('Usted eligio crear');
        break;
    default:
        console.log('Comando no reconocible');
}

// console.log('La base insertada fue:', argv.base);
// console.log('El limite insertado fue: ', argv.limite);
// console.log('La opcion del menu seleccionado fue: ', argv._[0]);

// console.log('informacion de la funcion: ', multiplicar);



// const fs = require('fs');  aqui importamos el paquete de manipulacion de

// let base = 10;
// let tabla = '';
// for (let i = 1; i <= 10; i++) {
//     tabla += `${base} X ${i} = ${base * i} \n`;
//     // console.log(`${base} X ${i} = ${base * i}`);
// }

// fs.writeFile(`./tablas/tabla-${base}.txt`, tabla, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido generado con exito`);
// });

// /*
// 2 X 1 = 2
// 2 X 2 = 4
// ...
// */