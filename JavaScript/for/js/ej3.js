/* 
        EJERCICIO 3 (1 punto)
        Crea un programa que haga lo siguiente:
        - Solicite al usuario un número
        - Comprueba que sea par y mayor que 0
        - Y si es así, muestre por pantalla una línea con el carácter “*” (asterisco) tantas veces
        como el valor del número.
        Por ejemplo, si introduce 8 mostrará ********
*/

let num = prompt("Ingrese un numero");

if (num % 2 == 0 && num > 0) {
    for (num; num > 0; num--) {
        console.log("*")
    }
}
