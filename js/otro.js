
/*--Traemos los datos desde el localstorage, estos datos llegan en tipo de archivo JSON */
let archivosJson = localStorage.getItem("listaProductosLocal");

/*--Convertimos el archivo JSON a un array */
const arrayListConvert = JSON.parse(archivosJson);

/*--De este array sacamos los datos para completar en la tabla--*/

//recorro cada elemento del array
arrayListConvert.forEach(element => {
    
    //traigo tbdoy de table
    let tbody = document.querySelector("tbody");
    console.log(element);
    let dato = "";
    /*Utilizo object.values para transformar un objeto en array y asi poder iterarlo. Dentro del array tengo guardado solo los valores de las claves del objeto */
    let values = Object.values(element);
    console.log(values);
    
    
    /*Luego lo itero y agrego los datos a la variable dato */
    
    for(let i=0; i<values.length;i++){
        let value = values[i];       
        dato += "<td>" + value + "</td>";
    }

    /*Al finalizar guardo todos los <td> dentro de <tr> dentro de <tbody> */

    tbody.innerHTML += "<tr>" + dato + "</tr>";  
     
});

/*--Ya extraigo los datos del localstorage para trabajar con ellos, me queda ordenar los datos que necesito traer para la tabla*/


/*pruebo traer datos de una api */
let xmr = new XMLHttpRequest

xmr.open("GET", "https://jsonplaceholder.typicode.com/users");


xmr.addEventListener("load", ()=>{
    console.log(xmr.status);
    
        if (xmr.status == 200) {
            let data = JSON.parse(xmr.responseText);
            console.log(data);
            console.log(xmr.readyState);
        } else {
            console.error("Error:", xmr.statusText);
        }
    
}
)

xmr.send()


 