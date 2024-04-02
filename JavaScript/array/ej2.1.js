'use strict';

/**
 * Apartado 1
 * Realiza los siguientes pasos (muestra por consola el resultado después de aplicar cada uno):
 * - Crea un array con 4 elementos
 * - Concatena 2 elementos más al final y 2 al principio
 * - Elimina las posiciones de la 3 a la 5 (ambas incluidas)
 * - Inserta 2 elementos más entre el penúltimo y el último
 * - Muestra el array del paso anterior, pero con los elementos separados por " ==> "
 */

console.log('--------------- APARTADO 1 -----------------');
let array = [43, "hola" , 53 , 100];
console.log(array);
array.push(23,"euiuiew");
console.log(array);
array.unshift("primero","segundo");
console.log(array);
array.splice(2,6);
console.log(array);
array.splice(array.length -1, 0, "sahdhjsd", "uuqdgius");
console.log(array);

console.log(array.join(" ==> "));

/**
 * Apartado 2
 * Crea una función que reciba como primer parámetro el nombre de un alumno, seguido
 * de un número indeterminado de notas (usa spread para agruparlas en un array).
 * Utiliza el método reduce para sumar las notas y calcula la media, que deberás mostrar por consola.
 * Posible llamada -> printMedia("Pepe", 4.25, 6, 8.5, 9)
 */

console.log('--------------- APARTADO 2 -----------------');

function ejeciciodos(nombre ,...notas ){
    let total = notas.reduce((total,notas) => total + notas, 0);
    total = (total / notas.length).toFixed(2);
    console.log(`${nombre} tienes un ${total} de media`)

}
 ejeciciodos("Pepe", 4.25, 6, 8.5, 9);

/**
 * Apartado 3
 * Crea un array de cadenas y ordénalo usando el método sort de mayor a menor longitud .
 * Imprime el array original (antes de ordenarlo) y el resultado
 */

console.log('--------------- APARTADO 3 -----------------');

let apartadotres = ["iugdsuygcytfasytsaytasfa", "dsahdsag", "auashasdukygdsygu", "dsf", "fasdas", "dasaadsdas"];
console.log(apartadotres);
apartadotres.sort();
console.log(apartadotres);
apartadotres.sort((a, b) => b.length - a.length);
console.log(apartadotres);


