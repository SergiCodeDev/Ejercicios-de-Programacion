
//visualizar en navegador

window.addEventListener("load", function(e) {
    
    var numero;
    
    numero = parseFloat (prompt ("Veamos si es positivo o negativo"));

    if (numero >= 0) {
        numero = "Positivo";
    }
    else{
        numero = "negativo";
    }

    console.log(numero);
});