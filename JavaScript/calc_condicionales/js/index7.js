
//visualizar en navegador

window.addEventListener("load", function(e) {
    
    var numeroU = 0;
    var numeroDos = 0;
    var resultado = 0;

   numeroU = parseFloat (prompt ("Numero Uno"));
   numeroDos = parseFloat (prompt ("Numero DOS"));

   if (numeroU >= numeroDos){
    resultado = numeroU-numeroDos;
    resultado = ("EL NUMERO "+numeroU+" ES MAYOR QUE "+numeroDos+" Y SU DIFERENCIA ES DE "+resultado);
   }
   else {
    resultado = numeroDos-numeroU;
    resultado = ("EL NUMERO "+numeroDos+" ES MAYOR QUE "+numeroU+" Y SU DIFERENCIA ES DE "+resultado);
   }

   console.log(resultado);
});