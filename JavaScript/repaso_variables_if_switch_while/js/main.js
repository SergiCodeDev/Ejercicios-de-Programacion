window.addEventListener("DOMContentLoaded", () => {

    //let precio = prompt("Que precio quieres calcular con IVA ?");

    //let resultado = precio * 1.21;

    //console.log("Precio total "+ resultado);


    //let precio2 = parseFloat(prompt("Que precio quieres calcular con IVA 2 ?"));

    /* let precio2 = Number(prompt("Que precio quieres calcular con IVA 2 ?")); */
    /* let precio2 = parseInt(prompt("Que precio quieres calcular con IVA 2 ?")) */

    //let resultado2 = precio2 + (precio2 * 21 / 100) ;

    //console.log("Precio total "+ resultado2);

    /* let lado_cuadrado = prompt("Calcular area y logitud cuadrado");
    
    let area = lado_cuadrado*lado_cuadrado;
    
    let perimetro = lado_cuadrado *4;
    
    console.log("Area: " + area +" Perimetro " + perimetro) */

    /* const KILOMETROS = prompt("Kilometros");
    const LITROS = prompt("Litros");
    
    let resultado = LITROS / KILOMETROS;
    
    console.log(resultado);
     */
    /* 
    let numero = prompt("Numero");
    
    let division = parseInt(numero/10);
    let resto = numero%10;
    
    console.log("Decenas: "+division+" Unidades: " +resto)
     */

    /* 
    let valor1 = prompt("valor");
    let valor2 = prompt("valor2");
    
    let valor3 = valor1
    valor1 = valor2
    valor2 = valor3
    
    //[valor1,valor2] = [valor2,valor1]
    
    console.log("Valor 1 ahora es: "+ valor1+ " valor 2 ahora es: "+valor2)
     */

    /* let numero = prompt("numero");
    
    numero = numero%2 == 0;
    
    console.log(numero); */

    /* let numero1 = parseInt(prompt("Numero1"));
    let numero2 = parseInt(prompt("Numero2"));
    
    if (numero1 > numero2) {
        console.log("El numero "+numero1+" es mayor que "+numero2);
    
    } else if (numero1 < numero2) {
        console.log("El numero "+numero2+" es mayor que "+numero1)
    } else {
        console.log("El numero "+numero2+" es igual que "+numero1)
    } */

    /* let numero1 = prompt("Numero1");
    
    if (numero1 >0) {
        console.log("El numero "+numero1+ " es positivo");
    
    } else if (numero1 < 0) {
        console.log("El numero "+numero1+" es negativo ")
    } else {
        console.log("El numero "+numero1+" es igual a 0 ")
    } */
    /* 
    let numero1 = prompt("Numero1");
    
    if (numero1 < 5 && numero1 >= 0) {
        console.log("INSUFICIENTE");
    } else if (numero1 >=5 && numero1 <= 6) {
        console.log("SUFICIENTE")
    } else if(numero1 > 6 && numero1 < 8){
        console.log("BIEN")
    } else if(numero1 >=8 && numero1 <= 10){
        console.log("EXCELENTE")
    } else{
        console.log("Escribe un numero del 0 al 10")
    }
     */

    /* let menu = prompt("Menu: carne, pescado, verdura");

    switch (menu) {
        case "carne":
            console.log("Elegiste " + menu + " su bebida sera " + "vino tinto");
            break;
        case "pescado":
            console.log("Elegiste " + menu + " su bebida sera " + "coca cola");
            break;
        case "verdura":
            console.log("Elegiste " + menu + " su bebida sera " + "agua");
            break;
        default:
            console.log("Menu: carne, pescado, verdura");
            break;

    } */
/* 
    let mes = prompt("numero mes");

    switch (mes) {
        case "3":
        case "4":
        case "5":
            console.log(`${mes} es Primavera`);
            break;
        case "6":
        case "7":
        case "8":
        case "9":
            console.log(`${mes} es Verano`);
            break;
        case "10":
        case "11":
        case "12":
            console.log(`${mes} es Otoño`);
            break;
        case "1":
        case "2":
            console.log(`${mes} es Invierno`);
            break;

        default:
            console.log("Error");
            break;

    }

 */

let num = Number(prompt("Numero"));

while (num > 0) {
    let res = Math.pow(num,2);
    console.log(`El numero ${num} su cuadrado es ${res}`)

    num = Number(prompt("Numero"));
}

console.log("Fin")



});

/* window.addEventListener('load', llamada_funcion, false); */