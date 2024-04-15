// si objeto.images[0] no es una url validad return false
function isValidUrl(string) {
    try {
        new URL(string);
    } catch (_) {
        return false;  
    }
    return true;
}

function meterArticulos(datos) {
    if (datos != "error") {
        const SECION = document.querySelector(".articulos")
        datos.forEach(objeto => {

            let article = document.createElement("article")
            article.setAttribute("data-filter", `${objeto.category.name}`);

            let img = document.createElement("img")
            // las object.images estan mal escritas en la api
            img.src = isValidUrl(objeto.images[0]) ? objeto.images[0] : objeto.category.image;
            img.alt = `${objeto.title}`
            let titulo = document.createElement("h3")
            titulo.textContent = `${objeto.title}`
            titulo.classList.add("titulo")
            let precio = document.createElement("p")
            precio.textContent = `${objeto.price} €`
            precio.classList.add("precio")
            let descripcion = document.createElement("p")
            descripcion.textContent = `${objeto.description}`
            descripcion.classList.add("descripcion")

            article.appendChild(img)
            article.appendChild(titulo)
            article.appendChild(precio)
            article.appendChild(descripcion)


            SECION.appendChild(article)

        });
    } else {
        const SECION = document.querySelector(".articulos")

        let h2 =document.createElement("h2")
        h2.textContent = "No se pudo acceder a la API"

        SECION.appendChild(h2)
    }
}

async function obtenerDatos() {
    let datos;
    try {
        const respuesta = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=200');
        if (!respuesta.ok) {
            throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        datos = await respuesta.json();
        /* console.log(datos); */


    } catch (error) {
        console.log('Ha ocurrido un error: ' + error);
        datos = "error"
    }
    meterArticulos(datos);
}

window.addEventListener("DOMContentLoaded", obtenerDatos);
