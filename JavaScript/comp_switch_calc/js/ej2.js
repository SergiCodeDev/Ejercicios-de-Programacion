/* 
EJERCICIO 2 (1 punto)
Escribe un programa que solicite al usuario ingresar su calificación en un examen (un número
entre 0 y 10). El programa debe mostrar un mensaje indicando si el usuario aprobó o suspendió
el examen.
El examen se considera aprobado si es mayor o igual que 5. Si el número ingresado es menor
que 0, muestra un mensaje de error.
*/

window.addEventListener("DOMContentLoaded", () => {

    const NOTA = prompt("ingresar su calificación del examen DEL 1 AL 10")

    if (NOTA < 0 || NOTA >= 11) {
        console.log("error")
    } else if (NOTA >= 5) {
        console.log("APROBADO!!")
    } else {
        console.log("Suspenso")
    }

});