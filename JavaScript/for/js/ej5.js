/* 
        EJERCICIO 5 (1 punto)
        Crea un programa que solicite al usuario un número y calcule su factorial.
        Por ejemplo: el factorial de 5 sería 5 x 4 x 3 x 2 x 1 = 120
*/

let numero = prompt("introduce un número");
let resultado = 1;

for (let i = 1; i <= numero; i++) {
    resultado *= i;
}

console.log("El factorial de " + numero + " es " + resultado);

