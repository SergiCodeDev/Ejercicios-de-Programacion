'use strict';

/**
 * Apartado 1
 * Crea una función que reciba 2 cadenas por parámetro. Dicha función imprimirá por consola qué cadena
 * tiene mayor longitud. Si el tipo de algún parámetro no es string (typeof param !== "string"),
 * debes imprimir un error.
 * Llama a la función 3 veces con diferentes parámetros. En una de esas llamadas pásale por parámetro un valor que no 
 * sea string.
 */

console.log('--------------- APARTADO 1 -----------------');

function longitud(x, y){
if (typeof x !== "string" || typeof y !== "string"){
console.log("Error");
} else if (x.length > y.length){
    console.log(`"${x}" es mas largo`);
} else {
    console.log(`"${y}" es mas largo`);
}
};

longitud("hola mundo", "ninguno es largo");
longitud("hola", "restos");
longitud("hola mundo", 32);



/**
 * Apartado 2
 * Crea una función que reciba 2 números por parámetro, el primer número indicará cuantas veces debemos imprimir el
 *  segundo
 * por pantalla, pero en cada iteración muéstra el valor anterior multiplicado por 2.
 * Ejemplo: Si recibimos 4 y 6 imprimiremos: 6 12 24 48
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 2 -----------------');
function concatenar(num1, num2){

   for (let mult = 0; mult < num1; mult++) {
    
    console.log(num2)
    num2 = num2 * 2
   
   };
    
};
console.log("- Uno");
concatenar(4,5);
console.log("- Dos");
concatenar(10,2);

/**
 * Apartado 3
 * Crea una función que reciba 2 parámetros. El primero será una cadena y el segundo otra cadena que contendrá
 *  un caracter.
 * Convierte ambos parámetros a cadena y comprueba que efectivamente, el segundo parámetro tiene una longitud de 1.
 * Debes mostrar cuantas veces aparece el caracter recibido en la cadena.
 * Ejemple: Si recibimos "carcasa" y "a", debemos indicar que aparece 3 veces dicha letra en la cadena.
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 3 -----------------');
function convertir (text1 , text2){
    // convertir a string
    let text1len = String(text1).length;
    let text2len = text2.toString().length;

    console.log(text2len)
    let vecesrepetido = 0;
    for (let contador = 0; contador < text1len; contador++){
        if (text1[contador] == text2) {
            vecesrepetido++
        }
    }
    console.log(`aparece ${vecesrepetido} veces "${text2}" en "${text1}"`)
};

convertir("hola :) axum", "a");
convertir("la panceta esta muy bien porque es carne", "e");
convertir("o o o o o", "o");

// fase 2

function contarCaracter(text1 , text2) {
    // Convertir a cadena
    text1 = String(text1);
    text2 = String(text2);
    if (text2.length !== 1) {
        console.log("El segundo parámetro debe ser un solo carácter.");
        return;
    }
    // Usar match() para encontrar todas las ocurrencias del carácter en la cadena
    let coincidencias = text1.match(new RegExp(text2, 'g'));

    let contador = coincidencias ? coincidencias.length : 0;
    console.log("El carácter '" + text2 + "' aparece " + contador + " veces en la cadena.");
}
contarCaracter("carcasa", "a");
contarCaracter("javascript", "a")
contarCaracter("elefante", "e"); 

/**
 * Apartado 4
 * Crea una función que reciba 3 parámetros (nombre de producto, precio e impuesto en porcentaje sobre 100).
 * Dicha función hará lo siguiente:
 * - Los parámetros deberán tener un valor por defecto por si no los recibe que deben ser:
 *  "Producto genérico", 100 y 21.
 * - Convierte el nombre de producto a string (por si acaso) y los otros 2 a número.
 *  Si el precio o el impuesto no son
 *   numéros válidos (NaN) muestra un error. Si son válidos,
 *  muestra por consola el nombre del producto y el precio final contando impuestos.
 * - Llama a la función varias veces, omitiendo parámetros, con todos los parámetros,
 *  y pasándo algún valor no númerico en el precio o impuesto.
 */

console.log('--------------- APARTADO 4 -----------------');

function calculosx (nombre = "Producto genérico", precio = 100, impuesto = 21) {
    nombre = nombre.toString();
    precio = parseFloat(precio);
    impuesto = parseFloat(impuesto);
    if (isNaN(precio) || isNaN(impuesto)) {
        console.log("Error");
    } else {
        
        let resultado = precio + (precio*(impuesto/100));
        console.log(`${nombre} cuesta ${parseFloat(resultado).toFixed(2)}`);
    }
};

calculosx();
calculosx("Sandia", 5);
calculosx("Libreta", 2.3 , 10);

calculosx("Error producto", "gstgs" , 10);

/**
 * Apartado 5
 * Crea una función de tipo flecha (arrow function) que reciba 2 parámetros. Una cadena completa 
 * y un trozo de cadena a buscar.
 * La función debe comprobar si el trozo de cadena de búsqueda se encuentra
 *  dentro de la cadena completa e imprimir
 * por consola un mensaje indicando si ha encontrado coincidencia o no.
 * La búsqueda no debe ser sensible a mayúsculas o minúsculas,
 *  por lo que debes comparar ambas cadenas previa transformación
 * a minúsculas (o a mayúsculas). 
 * Ej: La cadena "Santiago de Compostela" contiene la cadena de búsqueda "COMPO".
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 5 -----------------');

let flecha = (texto, buscar) => {

 texto = texto.toLocaleLowerCase();
 buscar = buscar.toLocaleLowerCase();

 if (texto.includes(buscar)){
    console.log("Se encontraron coincidencias");
 } else {
    console.log("No se encontraron coincidencias");
 }
};


flecha("Santiago de Compostela", "COMPO");

flecha("hoLa mundo", "AdioS");