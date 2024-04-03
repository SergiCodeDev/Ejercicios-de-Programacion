



window.addEventListener("load", function(e) {
    
    var resultadoid = 0;
    var resultado;

    resultadoid = parseFloat (prompt("Escribe un numero para identificar SI ES PAR O IMPAR:"));
    

        resultado = resultadoid%2;

        if (resultado == 0){
            resultado = "EL NUMERO ES PAR"
        
           }
        
           else {
            resultado = "EL NUMERO ES IMPAR"
           }
    

   
    console.log (resultado);

});

