/* 
    Realiza un programa en JavaScript y HTML donde se le solicite al usuario ingresar un número
    entero y luego preguntarle que quiere hacer con ese número, el cual tendrá dos opciones:

    1. Que el numero ingresado le genere la tabla de multiplicar de ese mismo número del 0 al 10.
    2. Que el numero ingresado le genere la potencia de ese mismo número del 0 al 10.

    Nota: El usuario debe decidir en dos opciones "M" para realizar la tabla de multiplicación o "P"
    para realiza la potencia.

    El programa debe mostrar el resultado de la operación escogida en una tabla en la página web y además
    debe tener la opción de imprimirla.

    Ejemplo: Si el usuario digita el número 3 y elige la opción "M" entonces el programa mostrar en la
    página web el resultado de la tabla de multiplicar del 3 sera del 0 al 10.

    3 x 0 = 0

    3 x 1 = 3 y así sucesivamente hasta el 10.

    Si elige la opción "P" entonces el programa debe mostrar en la página web la potencia del 0 al 10.

    3^0 = 1

    3^1 = 3

    3^2 = 9 y así sucesivamente hasta el 10.

    Por último, un botón debajo de la tabla de resultado que imprima el resultado. 
*/

const NUMERO = parseInt(prompt("Ingresar un número entero"));
const OPERACION = prompt("Elige M para multiplicar o P para potencia del 0 al 10");

let cuerpo = document.querySelector("body");

cuerpo.innerHTML =
    `
  <table border="1">
  </table>
`;

let operator = "";

if (OPERACION == "M") {
    operator = "*"
} else if (OPERACION == "P") {
    operator = "^"
} else {
    operator = "Error"
}

let tabla = document.querySelector("table")

tabla.innerHTML = `
<thead>
        <tr>
            <th>X</th>
            <th>${operator}</th>
            <th>Y</th>
            <th>=</th>
            <th>Resultado</th>
        </tr>
    </thead>
`;

tabla.innerHTML += `
<tbody>
</tbody>
`;

let tbody = document.querySelector("tbody");

if (OPERACION == "M") {
    for (let index = 0; index < 11; index++) {
    
        let resutado = NUMERO * index;
          
        tbody.innerHTML += `
    <tr>
        <td>${NUMERO}</td>
        <td>${operator}</td>
        <td>${index}</td>
        <td>=</td>
        <td>${resutado}</td>
    </tr>
    `;
    }
} else if (OPERACION == "P") {
    for (let index = 0; index < 11; index++) {
    
        let resutado = Math.pow(NUMERO,index);
          
        tbody.innerHTML += `
    <tr>
        <td>${NUMERO}</td>
        <td>${operator}</td>
        <td>${index}</td>
        <td>=</td>
        <td>${resutado}</td>
    </tr>
    `;
    }
} else {
    console.log("Error");
}

cuerpo.innerHTML += `
<button>IMPRIMIR</button>
`;

let boton = document.querySelector("button");

boton.addEventListener("click", () => {
    window.print();
});
