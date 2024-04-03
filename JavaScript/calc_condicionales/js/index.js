
//visualizar en navegador

window.addEventListener("load", function(e) {
    
    var edad = 0;
    var nombre = "";
    var pais = "";

    edad = prompt("Edad");
    nombre = prompt("Nombre");
    pais = prompt("Pais");

    edad = parseInt(edad);

    if(edad>=18) {
        console.log("Mayor de Edad");
        edad = "Mayor de Edad";
    }
    else {
        console.log("Menor de Edad");
        edad = "Menor de Edad";
    }

    if (nombre!="" && pais!="") {

        console.log("Hola "+nombre+" eres "+edad+" y eres del pais "+pais)

    }

});