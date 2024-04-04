/* 
        EJERCICIO 5 (1 punto)
        Crea un programa que solicite al usuario dos valores enteros, los compare y muestre por
        pantalla si uno es mayor que el otro o si son iguales.
        Ejemplo: El número 5 es mayor que 2.
*/

window.addEventListener("DOMContentLoaded", () => {

    const NUMERO1 = prompt("NUMERO 1")
    const NUMERO2 = prompt("NUMERO 2")

    if (NUMERO1 > NUMERO2) {
        console.log("El número " + NUMERO1 + " es mayor que " + NUMERO2 + ".")
    } else if (NUMERO1 < NUMERO2) {
        console.log("El número " + NUMERO1 + " es menor que " + NUMERO2 + ".")
    } else {
        console.log("El número " + NUMERO1 + " es igual que " + NUMERO2 + ".")
    }

});

