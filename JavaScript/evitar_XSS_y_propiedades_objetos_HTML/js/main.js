const cuerpo = document.querySelector("body");

console.dir(cuerpo); // ver propiedades de un objeto HTML

// en este caso al insertar el h1 en body borraria todo lo de body
// body.innerHTML = `<h1>Hola</h1>`;

// es mejor añadirselo (depende el caso de uso)

cuerpo.innerHTML += `
<div>
    <h1 onclick="volverVerde()">Hola</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing</p>
    <span style="color: red;">Hola Mundo</span>
    <script>
    function volverVerde(){
        let verde = document.querySelector("h1");
        verde.style = "color: green;";
    }  
    </script>
</div>
`;

// este script no funciona porque el navegador lo bloquea


// innerHTML puede ser vulnerable para ataques XSS
// digamos las etiquetas html se mostrarian en el navegador
// igual que las de <script>JavaScript</script> y podrian hacer cosas graves
// hay que evitar usarlo cuando mostramos mensajes de un chat por ejemplo

// para evitar esto podemos usar textContent y createTextNode()
// que ara que las etiquetas html se muestren como texto plano


// textContent es una propiedad necesitas tener un objeto html primero
let div2 = document.createElement("div");
let pDiv = document.createElement("p");
pDiv.textContent = `
<span style="color: red;>Hola Mundo</span>
`;

div2.appendChild(pDiv);
cuerpo.appendChild(div2);

// document.createTextNode() permite darle un valor de texto
let div3 = document.createElement("div");
let pDiv3 = document.createElement("p");
let texto = document.createTextNode(`Mi texto createTextNode() 
<span style="color: red;>Hola Mundo</span>`);

pDiv3.appendChild(texto);
div3.appendChild(pDiv3);
cuerpo.appendChild(div3);

// experimentos

let caja = document.createElement("div");

caja.style.minHeight = "100px";
caja.style.minWidth = "100px";
caja.style.border = "5px solid black";

// caja.className = "rosa-b"
// caja.className = "bordes-redondos"

// Si el elemento ya tiene la clase, la elimina. Si no la tiene, la añade.
// caja.classList.toggle("bordes-redondos"); 

caja.classList.add("rosa-b","bordes-redondos");
// caja.classList.add("display-none"); // añade a los existentes

let cajaParrafo = document.createElement("p");
cajaParrafo.textContent = "Pruebas";
cajaParrafo.setAttribute("data-filter",`parrafo`);

let cajaLink = document.createElement("a");
// puedes poner lo que te de la gana de propiedades
cajaLink.setAttribute("style",`color: blue; font-size: 2rem;`);
cajaLink.textContent = "enlace 1"
cajaLink.href = "#!"

let cajaLink2 = document.createElement("a");
cajaLink2.textContent = "enlace 2"
cajaLink2.setAttribute("style",`color: blue; font-size: 2rem; padding-left: 20px;`);
cajaLink2.setAttribute("href", "#!")

let cajaBotton = document.createElement("button");
cajaBotton.textContent = "Ocultar pruebas / Ver"
cajaBotton.className = "ocultar";



caja.appendChild(cajaParrafo);
caja.appendChild(cajaLink);
caja.prepend(cajaLink2);
// Lo inserta antes del que le elijas elemento a posicionar , delante de quien.
caja.insertBefore(cajaBotton, cajaLink);
cuerpo.appendChild(caja);

let selecionarB = document.querySelector(".ocultar");

selecionarB.addEventListener("click", () => {
    // let parrafo = document.querySelector('[data-filter="parrafo"]')
    // seleciona parrafo si esta separado por espacios ~
    let parrafo = document.querySelector('[data-filter~="parrafo"]');
      if (parrafo.style.display === "none"){
        parrafo.style.display = "";
      } else {
        parrafo.style.display = "none";
      }
});