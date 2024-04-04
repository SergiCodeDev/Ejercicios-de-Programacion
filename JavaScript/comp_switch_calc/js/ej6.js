/*  
EJERCICIO 6 (1 punto)
Crea un programa que solicite al usuario un número entero y haga lo siguiente:
Si el número es positivo lo debe convertir a negativo y si es negativo lo debe convertir a
positivo.
*/

window.addEventListener("DOMContentLoaded", () => {

    const NUMERO = prompt("Escribe un numero entero");

    if (NUMERO >= 0) {
        let operaciones = NUMERO * -1;

        console.log(operaciones)
    } else {
        let operaciones = NUMERO * -1;

        console.log(operaciones)

    }

});


