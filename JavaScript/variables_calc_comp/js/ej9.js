/* 
        EJERCICIO 9 (2 puntos)
        Escribe un programa que solicite al usuario los siguientes datos sobre un producto: nombre,
        precio, cantidad en stock.
        A continuación, el programa debe mostrar la siguiente información:
        • Nombre del producto.
        • Precio por unidad.
        • Cantidad en stock.
        • Valor total del stock (precio por unidad multiplicado por la cantidad en stock).
        Ejemplo:
        Nombre del producto: Camisa
        Precio por unidad: 25 €
        Cantidad en stock: 50
        Valor total del stock: 1250 €
*/

const nombre = prompt("Nombre del producto:");
const precio = prompt("Precio por unidad:");
const stock = prompt("Cantidad en stock");
const money = precio * stock;

console.log("Nombre del producto: " + nombre);
console.log("Precio por unidad: " + precio + " €");
console.log("Cantidad en stock: " + stock);
console.log("Valor total del stock: " + money + " €");
