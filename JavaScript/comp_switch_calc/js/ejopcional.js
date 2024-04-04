/* 
        EJERCICIO OPCIONAL
        ¿Cómo mejorarías este ejercicio visto en clase?
        Escribe un programa que solicite un número un mes del año y muestre el número de días que
        tiene. En caso de introducir un mes desconocido, mostrar un mensaje de advertencia.
*/

window.addEventListener("DOMContentLoaded", () => {

    let mes_ano = prompt("Escribe un dia del mes");

    switch (mes_ano) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            alert("31")
            break;
        case "2":
        alert("28")
            break;
        case "4":
        case "6":
        case "9":
        case "11":
        alert("30")
            break;
        default:
            alert("Error")
            break;
    }

});