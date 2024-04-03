
//visualizar en navegador

window.addEventListener("load", function(e) {
    
   var numeroU = 0;
   var numeroDos = 0;
   var resultado = 0;

   numeroU = parseInt (prompt ("Numero para dividir"));
   numeroDos = parseInt (prompt ("Numero DOS"));

   if (numeroU == 0 || numeroDos == 0) {
    resultado = "Error";
   }
   else{
    resultado = numeroU/numeroDos;
   }

   console.log("Resultado: "+resultado)



});