const argv = require('./config/yargs').argv;
const colors = require('colors');

const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('archivo creado: ', archivo.red))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}






// let base = '7';

//console.log(process.argv);
//let argv2 = process.argv; //aquí es donde tomamos los datos, el process nos da toda la información.
// let parametro = argv[2];
// let base = parametro.split('=')[1]

//console.log('Limite', argv.limite);

// crearArchivo(base)
//     .then(archivo => console.log(`archivo creado: ${archivo}`))
//     .catch(e => console.log(e));cls