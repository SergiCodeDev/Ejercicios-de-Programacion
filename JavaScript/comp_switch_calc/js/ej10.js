/*         
        EJERCICIO 10 (1 punto)
        Investiga y explica la diferencia entre los operadores de igualdad == y === en JavaScript.
        ¿Cuál será el resultado de los dos condicionales? 
*/



window.addEventListener("DOMContentLoaded", () => {

    let valor_num1 = 30
    let valor_num2_str = "30"

    let letras = "Hola"
    let letras2 = "HOLA"
    let letras3 = "hola"



    console.log(valor_num1 == valor_num2_str)
    console.log(valor_num1 === valor_num2_str)
    console.log(letras == letras2)
    console.log(letras2 === letras3)

});