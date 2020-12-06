const { leerDatos } = require('../Controlador/Tareas');

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descipcion de una tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente una tarea'
}

const eliminar = (descripcion) => {
    leerDatos();

    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion)

    if (nuevoListado.lenght === tareasPorHacer.lenght) {
        return false;
    }

    tareasPorHacer = nuevoListado;
    guardarDatos()
    return true

}

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('eliminar', 'elimina la tareade la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}