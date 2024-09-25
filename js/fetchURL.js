//Aca empieza todo
//En este modulo utilizo fetch para traer datos desde una url
//Para el caso de esta pagina utilizo fetch para traer la data de un archivo html dentro de nuestro servidor
/*Con async - await = voy convirtiendo la respuesta PROMISE de la fetch en una respuesta legible*/

export const fetchURL = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        //si esta todo bien entonces

        return await response.text()
        console.log(response.text());
        
    } catch (error) {
        return `<h1>404 - Pageg not found</h1>`;
    }
}