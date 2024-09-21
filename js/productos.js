//En este modulo inserto la ruta desde donde quiero sacar la data (la ruta relativa del archivo html correspondiente)
/*Osea utilizo la funcion dentro de fetch, o en otras palabras, importo el retorno de la funcion fetchURL */

import { fetchURL } from "./fetchURL.js";

/*Esta nueva funcion me retornara lo que se encuentra dentro del html que puse como ruta, en este caso productos */
export async  function  productosHtml() {
    
   return await fetchURL("./html/productos.html");   
    
    
}