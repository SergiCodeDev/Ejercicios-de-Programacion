/* 
        EJERCICIO 8 (2 puntos)
        Escribe un programa que solicite al usuario los siguientes datos: nombre, edad, sueldo
        mensual.
        A continuación, el programa debe mostrar la siguiente información:
        • Nombre.
        • Años restantes hasta la jubilación (67 – edad).
        • Si está jubilado (true/false).
        • Salario anual.
        Ejemplo de salida por consola:
        El nombre es Carlos.
        Años restantes hasta la jubilación: 30.
        Jubilado: false
        Salario anual: 30000
*/

const nombre = prompt("Escribe tu nombre:");
let edad = prompt("Escribe tu edad:");
let sueldomen = prompt("Escribe tu sueldo mensual:");

console.log("Nombre: " + nombre);

let jubilacion = 67 - edad;

let jubtrue = jubilacion <= 0;
let jubfalse = jubilacion > 0;

if (jubtrue) {
    console.log("Estas jubilado !!!");
} else {
    console.log("Años restantes hasta la jubilación: " + jubilacion);
}


if (jubtrue == true) {
    console.log("Si está jubilado: " + jubtrue);
} else {
    console.log("No esta jubilado: " + jubfalse);
};

let dineroano = sueldomen * 12;

console.log("Salario anual: " + dineroano);

