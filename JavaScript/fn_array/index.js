// 1. Array de días de la semana
let dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

function diaDeLaSemana(num) {
    if (num >= 0 && num <= 6) {
        return dias[num];
    } else {
        return 'Número inválido. Debe estar entre 0 y 6.';
    }
}

console.log(diaDeLaSemana(4));

// 2. Array booleano
let boolArray = ['verdadero', 'falso'];

function esValido(num) {
    if (num >= 0 && num <= 9) {
        return boolArray[0];
    } else {
        return boolArray[1];
    }
}

console.log(esValido(10));

// 3. Función sumaLista
function sumaLista(lista) {
    let suma = 0;
    for (let x = 0; x < lista.length; x++) {
        suma += lista[x];
    }
    return suma;
}

console.log(sumaLista([2,4,5,1,2]));