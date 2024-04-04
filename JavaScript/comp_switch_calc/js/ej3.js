/* 
EJERCICIO 3 (1 punto)
Escribe un programa que solicite al usuario ingresar un número y determine si es par o impar.
El programa debe mostrar un mensaje indicando si el número es par o impar. Utiliza sentencias
if/else para realizar el ejercicio.
*/

window.addEventListener("DOMContentLoaded", () => {

    const NUMERO = prompt("Ingrese un numero");

    const RESTO = NUMERO % 2;

    if (RESTO == 0) {
        console.log(NUMERO + " Es par")
    } else {
        console.log(NUMERO + " Es impar")
    }

});