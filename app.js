let archivoTareas = require('./tareas');

let accion = process.argv[2];
let input = process.argv[3];
let tareas = archivoTareas.leer();

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        archivoTareas.imprimirTareas(tareas)
        console.log()
        break;

    case 'crear':
        let nuevaTarea = new archivoTareas.constTarea(input);
        archivoTareas.guardarTarea(nuevaTarea)
        break;
            
    case 'filtrar':
        archivoTareas.leerPorEstado(input);
        break;

    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
