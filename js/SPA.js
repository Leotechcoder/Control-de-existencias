//Aca importo los datos obtenidos como promesa

import navegacion from "./navegacion.js"
//
import { paginaHtml } from "./pagina.js";

/*Esta funcion me muestra lo que esta adentro del archivo html */
export default async function SPA (){
   
   const body = document.querySelector("body") 

   if(location.hash === ""){
      
      location.hash = "home"
      body.innerHTML = await paginaHtml("home");

   }
   else{

      body.innerHTML = await paginaHtml(`${location.hash.split("#")[1]}`)
      
   
   }
     
   navegacion();
   
   
   
    
}
