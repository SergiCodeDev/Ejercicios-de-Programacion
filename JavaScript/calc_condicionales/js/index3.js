
//visualizar en navegador

window.addEventListener("load", function (e) {

    var operaciones = 0;
    var srmd = "";
    var xope = 0;
    var xopedos = 0;
    var resultado;

    srmd = prompt("Que desea hacer ? +, -, x, /, %");
    xope = parseFloat(prompt("Escribe un numero"));
    xopedos = parseFloat(prompt("Escribe otro numero"));

    if (srmd == "+") {
        resultado = xope + xopedos;
    } else if (srmd == "-") {
        resultado = xope - xopedos;
    } else if (srmd == "x") {
        resultado = xope * xopedos;
    } else if (srmd == "/") {
        resultado = xope / xopedos;
    } else if (srmd == "%") {
        resultado = xope % xopedos;
    } else {
        resultado = "Error"
    }

    console.log("Resultado: " + resultado);

});