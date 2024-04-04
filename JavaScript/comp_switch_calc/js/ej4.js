/* 
        EJERCICIO 4 (1 punto)
        Crea un programa que solicite al usuario un número entero y muestre por pantalla si ese
        número es par y positivo.
        En caso contrario debe indicar si es negativo, impar o ambos.
*/

window.addEventListener("DOMContentLoaded", () => {

    const NUMERO = prompt("Ingrese un numero entero");

    const RESTO = NUMERO % 2;

    if (RESTO == 0 && NUMERO >= 0) {
        // Muestra si número es par y positivo.
        console.log(NUMERO + " Es par y positivo")
    } else if (NUMERO < 0 && RESTO < 0) {
        // Muestra si número es impar y negativo.
        console.log(NUMERO + " Es impar y negativo")
    } else if (NUMERO < 0 && RESTO == 0) {
        // Muestra si número es par y negativo.
        console.log(NUMERO + " Es par y negativo")
    } else {
        // Muestra si número es imspar y positivo.
        console.log(NUMERO + " Es impar y positivo")
    }

});




