/*        
       EJERCICIO 2 (1 punto)
       Crea un programa que solicite un número:
       Si el número es mayor que 0, el programa debe mostrar por pantalla un saludo tantas veces
       como el valor del número.
       Si el número es menor o igual a 0, debes mostrar un mensaje de advertencia al usuario.
       Por ejemplo:
       - Si el número introducido es 1, el programa debe mostrar “Hola” 1 única vez.
       - Si el número introducido es 5, el programa debe mostrar “Hola” 5 veces.
*/

let num = prompt("Numero de saludos");

if (num <= 0) {
    console.log("Introduce un valor mayor que 0 ")
} else {
    for (num; num > 0; num--) {
        console.log("Hola")
    }
}

