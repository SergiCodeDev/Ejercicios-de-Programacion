'use strict';

function print(valor){
    console.log(valor)
}

/**
 * Apartado 4
 * Crea un array de números de más de una cifra. Mapea ese array en otro que sea la suma de las cifras de cada número. No puedes usar bucles.
 * Pista: Puedes convertir los números a cadena primero y después con Array.from(cadena) la transformas a array de caracteres (que puedes sumar)
 * Imprime el array original y el resultado (ej: [123, 34, 52] -> [6, 7, 7])
 */

console.log('--------------- APARTADO 4 -----------------');

let arrayNumeros = [95, 72, 55, 65, 82, 21];

// manera corta
let sumarNumeros = arrayNumeros.map(num => Array.from(String(num), Number).reduce((total, numero) => total + numero));

print("Una linea");
console.log(`${arrayNumeros} -> ${sumarNumeros}`);

//desmanuzada
let sumarNumeros2 = arrayNumeros.map(valor => {
    let valorToString = String(valor);
    let desmenuzarValor = Array.from(valorToString);
    let convertirValorDesmenuzadoANumero = desmenuzarValor.map(Number);
    let suma = convertirValorDesmenuzadoANumero.reduce((total, numero) => total + numero, 0);
    return suma;
});

print("Usando 2 map 1 Array.from y 1 reduce");
console.log(`${arrayNumeros} -> ${sumarNumeros2}`);

// para no usar un 2 map
let sumarNumeros3 = arrayNumeros.map(valor => {
    let valorToString = String(valor);

    // let desmenuzarValor = Array.from(valorToString, Number); directamente le decimos que devolvera Number
    let desmenuzarValor = Array.from(valorToString, valor => {
       return Number(valor);
    });
    
    let suma = desmenuzarValor.reduce((total, numero) => total + numero, 0);
    return suma;
});

print("Solo usando 1 map 1 Array.from y 1 reduce");
console.log(`${arrayNumeros} -> ${sumarNumeros3}`);

// para no usar un 2 map
let sumarNumeros4 = Array.from(arrayNumeros, valor => {
    let valorToString = String(valor);

    // let desmenuzarValor = Array.from(valorToString, Number); directamente le decimos que devolvera Number
    let desmenuzarValor = Array.from(valorToString, valor => {
       return Number(valor);
    });
    
    let suma = desmenuzarValor.reduce((total, numero) => total + numero, 0);
    return suma;
});

print("Solo usando 2 Array.from y reduce");
console.log(`${arrayNumeros} -> ${sumarNumeros4}`);


/**
 * Apartado 5
 * A partir del siguiente array que contiene productos con mensajes sobre los mismos:
 * - Filtra los mensajes que empiecen por ERROR (usa el método startsWith).
 * - Después recórrelos y mételos en un objeto Map cuya clave sea el nombre del producto
 * y cuyo valor sea un array con los mensajes de error asociados al producto (debes comprobar 
 * si está  primero el producto en el Map para crear el array o añadirle el mensaje)
 * - Recorre el objeto Map mostrando cada producto, y que errores tiene asociados.
 */

console.log('--------------- APARTADO 5 -----------------');

let mensajes = [
    ['Silla', 'ERROR: Stock no coincide'],
    ['Mesa', 'Pedido de 2 unidades'],
    ['Silla', 'ERROR: El precio no puede ser menor a 1'],
    ['Mesa', 'ERROR: No se pueden enviar 0 unidades'],
    ['Cama', 'ERROR: El fabricante no tiene ese modelo'],
    ['Silla', 'Se ha borrado el producto de la base de datos'],
    ['Mesa', 'ERROR: El stock no puede ser negativo']
];

// print(mensajes[0][1]) // ERROR: Stock no coincide

let mensajesFiltrados = mensajes.filter(mensajes => mensajes[1].startsWith("ERROR"));

/* print(mensajesFiltrados); */

let mapa = new Map();

for (let [key,value] of mensajesFiltrados) {
    // has comprueba si existe la clave , devuelve true o false
    if(mapa.has(key)){
        // get busca la clave en el Map() si existe con push le añade el valor
        mapa.get(key).push(value);
    } else{
        // set añade el nombre de key y value al array[]
        mapa.set(key, [value]);
    }

}

for (let [key, values] of mapa){
    print(`${key}:`);
    for (let value of values){
        print(value);
    }
}

/* print(mapa) */

/**
 * Apartado 6
 * Crea una función calcule el área de un triángulo. Esta función recibirá 3 parámetros:
 * 2 lados del triángulo, y el ańgulo entre ellos (en grados).
 * Para calcular el área con estos datos debemos aplicar la fórmula: (1/2)*lado1*lado2*seno(ángulo).
 * Debes tener en cuenta que para aplicar la fórmula, el ángulo debe estar en radianes. Para pasarlo
 * a radianes lo multiplicamos por PI y dividimos entre 180.
 */

console.log('--------------- APARTADO 6 -----------------');

function calcularAreaTriangulo(lado1, lado2, anguloEnGrados) {
    let anguloEnRadianes = anguloEnGrados * Math.PI / 180;
    let area = (1/2) * lado1 * lado2 * Math.sin(anguloEnRadianes);
    return area;
}

let area = calcularAreaTriangulo(7, 8, 30);
print(area);

/**
 * Apartado 7
 * Crea una función que reciba una cadena con una fecha en formato "YYYY-MM-DD". Muestra la fecha (ej: 2019-02-28) con
 * el siguiente formato: Jueves, 28 de Febrero de 2019.
 * Debes formatear la fecha usando los métodos de la clase Date para obtener, día de la semana, día del mes, mes, y año.
 * No puedes usar librerías como moment.js (obsoleta - https://momentjs.com/docs/#/-project-status/) para ayudarte.
 * Para mostrar el nombre del mes o del día de la semana, puedes crearte un array que los contenga (los días de la semana empiezan por domingo -> 0)
 * Métodos de la clase Date: https://www.w3schools.com/jsref/jsref_obj_date.asp
 * Llama a la función varias veces.
 */

console.log('--------------- APARTADO 7 -----------------');

function fechaFnManual(valor) {

    let fecha = new Date(valor);
    const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const DIAS_DE_LA_SEMANA = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    /* 
    print(fecha.getDate()) // dia
    print(fecha.getDay()) // dia de la semana
    print(fecha.getMonth()) // MES de 0 a 11
    print(fecha.getFullYear()) // Año 
    */
   
    print(`${DIAS_DE_LA_SEMANA[fecha.getDay()]}, ${fecha.getDate()} de ${MESES[fecha.getMonth()]} de ${fecha.getFullYear()}`)
    /* print(fecha); // Jueves, 28 de Febrero de 2019 */
}

fechaFnManual("2019-02-28");
fechaFnManual("2024-03-15");
fechaFnManual("1998-04-01");
fechaFnManual("2000-07-12");


/**
 * Apartado 8
 * Haz lo mismo que en el apartado 7 pero utiliza la API de internacionalización para formatear la fecha (Intl)
 */

console.log('--------------- APARTADO 8 -----------------');

function capitalice(palabra){
    
    return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}

function fechaFn(valor) {
    let fecha = new Date(valor)
    let formateada = new Intl.DateTimeFormat('es-ES', {
        day: "numeric", month: "long", year: "numeric" , weekday: "long"
    }).format(fecha);

    // Convertir la primera letra del día de la semana y del mes a mayúsculas
    let palabras = formateada.split(' ');
    palabras[0] = capitalice(palabras[0]);
    palabras[3] = capitalice(palabras[3]);
   
    print(palabras.join(' ')); // Jueves, 28 de Febrero de 2019   
}

fechaFn("2019-02-28");
fechaFn("2024-03-15");
fechaFn("1998-04-01");
fechaFn("2000-07-12");
