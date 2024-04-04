/* 
        EJERCICIO 4 (1 punto)
        Crea un programa que muestre todas las tablas de multiplicar desde el número 0 al 10.
*/

for (let x_derecha = 0; x_derecha <= 10; x_derecha++) {
    for (let x_izquierda = 0; x_izquierda <= 10; x_izquierda++) {
        let resultado = x_izquierda * x_derecha;
        console.log(x_derecha + " X " + x_izquierda + " = " + resultado)
    }
}
