const fs = require('fs');

let tareasPorHacer = [];

const guardarDatos = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('./modelo/data.json', data, (err) => {
        if (err) throw new Error('No se a podido guardar la data')


    }); //para subir de nivel .. en carpetas
}

const leerDatos = () => {
    try {
        tareasPorHacer = require('../modelo/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

const crear = (descripcion) => {
    leerDatos();

    let tarea = {
        descripcion,
        completado: true
    };

    tareasPorHacer.push(tarea);
    guardarDatos();

    return tarea;

}

const getLista = () => {
    leerDatos();
    return tareasPorHacer
}

const actualizar = (descripcion, completado = true) => {
    leerDatos();

    let indice = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (indice >= 0) {
        tareasPorHacer[indice].completado = completado;
        guardarDatos();
        return true;
    }

    return false;
}
const eliminar = (descripcion) => {
    leerDatos();

    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length === tareasPorHacer.length) {
        return false;
    }

    tareasPorHacer = nuevoListado;
    guardarDatos();
    return true;
}

module.exports = {
    crear,
    leerDatos,
    actualizar,
    getLista,
    eliminar
}