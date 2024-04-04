/*  
EJERCICIO 7 (1.5 puntos)
Investiga cómo hacer un programa que compruebe si un número es par.
*/

const numerocomp = prompt("Escribe un numero para saber si es par o impar:");
if (numerocomp % 2 == 0) {
    console.log("Numero " + numerocomp + " es par")

} else {
    console.log("Numero " + numerocomp + " es impar")
}
