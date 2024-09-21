//deberia hacer lo mismo que en el archivo productos.js
import { fetchURL } from "./fetchURL.js";

// pero ahora con el html stock

export async function stockHtml() {
    return await fetchURL("./html/stock.html");
}

