/* 
let numero = prompt("Numero")

if (numero >= 0) {
    console.log(numero + " es positivo")
} else {
    console.log(numero + " es negativo")
}
*/

/* 
let saludo = prompt("Dime saluda")

if (saludo == "saluda") {

    console.log("Saludos")

} else {

    console.log("no entiendo")

}
*/

/* 
let saludo = prompt("Sluda")

if (saludo == "mañana") {
    console.log("Buenos dias")
} else if (saludo == "tarde") {
    console.log("Buenas tardes")
} else {
    console.log("Buenas nosches")
}
*/

let mes_ano = prompt("Escribe un dia del mes");

switch (mes_ano) {

    case "1":
        alert("31")
        break;
    case "2":
        alert("28")
        break;
    case "3":
        alert("31")
        break;
    case "4":
        alert("30")
        break;
    case "5":
        alert("31")
        break;
    case "6":
        alert("30")
        break;
    case "7":
        alert("31")
        break;
    case "8":
        alert("31")
        break;
    case "9":
        alert("30")
        break;
    case "10":
        alert("31")
        break;
    case "11":
        alert("30")
        break;
    case "12":
        alert("31")
        break;
        
    default:
        alert("Error")
        break;
}
