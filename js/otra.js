//Creo un array para guardar datos
const listaProductos = [];

//traigo y guardo los datos de la etiqueta form para poder manipularla
const form = document.querySelector("#agregarProductoForm");
console.log(form);

/*con el manejador de eventos llamo al evento submit y le asigno una funcion como segundo parametro*/

form.addEventListener('submit', (event) => {

    /*con el metodo preventDefault() cancelo el comportamiento por defecto del formulario, osea que no va a enviar datos y puedo conservar los datos en consola para trabajar con ellos y enviarlos cuando yo quiera*/
    event.preventDefault();
    // guardo en tbody el tbody de table
    const tbody = document.querySelector("tbody");
    //creo una fila para meter dentro de tbody mas tarde
    const fila = document.createElement("tr");
    
    /*creo un objeto para guardar los datos del producto que se ingresen */
    const producto = {};

    //extraigo y guardo los datos ingresados
    producto.nombre = document.getElementById("nombreProducto").value;
    //e inserto los datos "td" dentro de fila (<tr>)
    fila.innerHTML += "<td> "+ producto.nombre + "</td>";

    producto.tipo = document.getElementById("tipoProducto").value;
    fila.innerHTML += "<td> "+ producto.tipo + "</td>";

    //agrego la fecha actual
    producto.fecha = new Date().toLocaleDateString();
    fila.innerHTML += "<td> "+ producto.fecha + "</td>";

    producto.area = document.getElementById("areaProducto").value;
    fila.innerHTML += "<td> "+ producto.area + "</td>";

    producto.cantidad = document.getElementById("cantidadProducto").value;
    fila.innerHTML += "<td> "+ producto.cantidad + "</td>";

    producto.precio = document.getElementById("precioProducto").value;
    fila.innerHTML += "<td> "+ producto.precio + "</td>";

    //agrego el boton en la ultima celda de la fila
    fila.innerHTML += "<td><button id= 'boton'>Eliminar</button></td>";

    /*guardo el objeto producto dentro del array listaProductos de esta manera puedo luego trabajar con los datos dentro, como por ejemplo guardarlos en el localstorage*/
    listaProductos.push(producto);

    console.table(listaProductos);
  
    //inserto fila (<tr>) en tbody
    tbody.appendChild(fila);
    console.log(tbody);
    
} );


/*--A parte trabajo con la acciones sobre la tabla, agregando botones y generando evento sobre los mismos */

    //agrego botones de enviar y borrar
    let titulo = document.querySelector("#titulo");
    let div = document.createElement("div");
    div.id= "botones"
    div.innerHTML += "<button id='enviar'>Enviar</button><button id='borrar'>Borrar</button>";
    titulo.appendChild(div);


    //para eliminar contenido de la fila
    let tbody = document.querySelector("tbody")
    tbody.addEventListener('click', (event) => {
    //busco la ubicacion de donde ocurre el evento con target
    //parentNode es para dirigirme en el arbol al padre
    let eliminame = (event.target.parentNode.parentNode);
    tbody.removeChild(eliminame);        
    }) 

    //para eliminar toda la tabla
    let borrar = document.querySelector("#borrar");
    borrar.addEventListener ('click', () => {
    let tbody = document.querySelector("tbody")
    tbody.innerText = "";
    })

    //para guardar en localstorage los datos del array
    let enviar = document.getElementById("enviar");
    enviar.addEventListener('click', () => {
    let listaProductoslocal = JSON.stringify(listaProductos)
    console.log(listaProductoslocal);
    
    localStorage.setItem('listaProductosLocal',listaProductoslocal);
    })

/*--Una vez que tenga los datos en el localstorage, me interesa traerlos y trabajar con esos datos o llevarlos a otra pagina */


/*A parte voy a utilizar el objeto XHR para enviar los datos al servidor  */


/*Para poder llevar los datos al servidor debo trabajar con formdata y la API fetch */

console.dir(form);


