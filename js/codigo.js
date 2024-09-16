
// console.log(Cargarproducto(1, "fideos", 1000, 5));
 

// function  Cargarproducto (id, nombre, precio, stock){
//    return producto = {
//         "id": id , "nombre": nombre, "precio": stock, "stock": stock
//     }

// }

const almacenamientoTareas = [];

do {
    

function agregarTarea() {
    //creando un objeto donde vamos a guardar los datos
    let tarea = { };
    //estamos guardando datos dentro del objeto tarea
    tarea.name = prompt("Ingrese el nombre de la tarea");
    tarea.description = prompt("Ingrese una descripcion de la tarea");
    //mostramos los datos que guardamos
    console.log(tarea);
    //guardamos el objeto tarea dentro del array almacenamientoTareas
    almacenamientoTareas.push(tarea);
}

agregarTarea();


var continuar = confirm("Desea ingresar otra tarea?");

} while (continuar);


console.log(almacenamientoTareas);




/*
crear una funcion que nos sirva para agregar una tarea, pedir todos los datos necesarios que se necesiten al usuario
-preguntas
    -cual es el nombre de la tarea pedir al usuario
    -descripcion de la tarea pedir al usuario
    -guardar los datos en un array donde esten guardadas las demas tareas
*/

