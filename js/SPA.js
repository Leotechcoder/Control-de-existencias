//Aca importo los datos obtenidos como promesa


//del html productos
import {productosHtml} from "./productos.js";
//del html stock
import {stockHtml} from "./controlStock.js";

/*Esta funcion me muestra lo que esta adentro del archivo html */
export default async function SPA (){
   
   console.log(await productosHtml());
   
   console.log(await stockHtml());

}
