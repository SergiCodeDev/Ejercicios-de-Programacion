/* 
EJERCICIO 1 (1 punto)
Escribe un programa que solicite al usuario ingresar un número y determine si es mayor o
menor que 0, o cero. El programa debe mostrar un mensaje indicando el resultado.
Por ejemplo:
El número 2 es mayor que 0. 
*/

window.addEventListener("DOMContentLoaded", () => {

    const NUMERO = prompt("ingresar un número");
    if (NUMERO > 0) {
        console.log("El número " + NUMERO + " es mayor que 0.");

    } else if (NUMERO < 0) {
        console.log("El número " + NUMERO + " menor que 0.");

    } else {
        console.log("El número es " + NUMERO);
    }

});