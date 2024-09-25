
//Aca voy a hacer una funcion donde al hacer click en algun ancla del nav me oculte la etiqueta con la clase sectionA que se ve actualmente por la del id que corresponde al href del ancla

import { paginaHtml } from "./pagina.js";

export default function navegacion() {
    
    const html = document.querySelectorAll(".nav-link");
    
    
    html.forEach((link) => {
    link.addEventListener("click", async (event) => {
        event.preventDefault();
        

       const locacion = event.target.getAttribute("href").split("#")[1];

        location.hash= locacion;

        console.log(location.hash.split("#")[1]);
        
    

        
        window.onhashchange = async function () {

            const body= document.querySelector("body");
            body.innerHTML = await paginaHtml(`${location.hash.split("#")[1]}`);
            
        }
        

        });
    });

    }
        
