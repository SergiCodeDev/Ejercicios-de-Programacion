/* 
        EJERCICIO 7 (1 punto)
        Crea un programa que solicite al usuario su peso en kilos y su altura en centímetros y calcule el
        IMC (peso / altura2).
        Debe mostrar el resultado y luego hacer el diagnóstico:
        • Si el IMC es menor que 16 se muestra el mensaje: “Peso bajo”.
        • Si el IMC está entre (>=)16 y 25(<) se muestra el mensaje: “Peso normal”.
        • Si el IMC está entre 25 y 30(<) se muestra el mensaje: “Sobrepeso”.
        • Si el IMC es superior a 30 se muestra el mensaje: “Obesidad”.
*/

window.addEventListener("DOMContentLoaded", () => {

    const KILOS = prompt("Peso en kilos");
    const CTM = prompt("Altura en centimetros");

    let imc = KILOS / (CTM * CTM);
    imc = imc * 10000;


    switch (true) {
        case imc < 16:
            console.log("Peso bajo");
            break;
        case imc >= 16 && imc < 25:
            console.log("Peso normal");
            break;
        case imc >= 25 && imc < 30:
            console.log("Sobrepeso");
            break;
        case imc >= 30:
            console.log("Obesidad");
            break;

        default:
            console.log("Error");
            break;
    }

});