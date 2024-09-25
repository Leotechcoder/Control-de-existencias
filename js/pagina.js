import { fetchURL } from "./fetchURL.js";

/*Esta nueva funcion me retornara lo que se encuentra dentro del html que puse como ruta, en este caso productos */
export async  function  paginaHtml(pagina) {
    
   return await fetchURL(`./html/${pagina}.html`);   
    
    
}