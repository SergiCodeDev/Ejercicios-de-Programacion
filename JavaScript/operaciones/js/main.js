/* window.addEventListener("DOMContentLoaded", () => {

    let juan = parseFloat(prompt("Dinero"));

    
    let david = juan / 2;
    let jose = (juan + david) / 2;
    let promedio = (juan + david + jose) / 3;
    let promedioRedondeado = Math.round(promedio);

    console.log(promedioRedondeado);

}); */
/* 
window.addEventListener("DOMContentLoaded", () => {

    let cadena = prompt("Introduce una cadena de texto:");
    // condicion ? valorSiEsVerdadero : valorSiEsFalso;
    // lamba de python?? se secumple ?    esto sino esto
    let resultado = cadena.length >= 5 ? true : false;
    // condicion1 ? valorSiCondicion1EsVerdadero : condicion2 ? valorSiCondicion2EsVerdadero : valorSiAmbasCondicionesSonFalsas;

    console.log(resultado);

}); */

window.addEventListener("DOMContentLoaded", () => {

    let num1 = parseInt(prompt("num1 1 al 10"));
    let num2 = parseInt(prompt("num2 1 al 10"));
    let num3 = parseInt(prompt("num3 1 al 10"));

    let promedio = (num1 + num2 + num3) / 3;

    let lamba = promedio > 5 ? true : false;

    console.log(lamba)


    


});

