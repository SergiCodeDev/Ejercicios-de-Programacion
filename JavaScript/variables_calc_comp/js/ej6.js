/* 
        EJERCICIO 6 (1 punto)
        Crea un programa que solicite al usuario dos valores booleanos y compruebe:
        1. El resultado con una operación AND
        2. El resultado con una operación OR
*/

const puno = prompt("Escribe true o false");
const pdos = prompt("Escribe true o false");
if (typeof puno === 'boolean' && typeof pdos === 'boolean') {

    const andoper = puno && pdos
    console.log("Resultado AND: " + andoper);
    const oroper = puno || pdos;
    console.log("Resultado OR: " + oroper);


} else {
    console.log('Error escribe true o false');
}