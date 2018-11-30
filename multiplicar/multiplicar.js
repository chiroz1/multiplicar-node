//require
const fs = require('fs');
const colors = require('colors');
// const fs = require('express'); en la documentación no está, se instala por separado, no es nativo
// const fs = require('./fs'); al ser escrito así, nosotros estamos diciendo en donde se encuentra en nuestro proyecto

let listarTabla = (base, limite) => {

    console.log('============='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('============='.green);

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    });
}

module.exports = {
    listarTabla,
    crearArchivo
}