/* 
       EJERCICIO 9 (1 punto)
        Crea un programa que solicite al usuario una cantidad monetaria y un carácter d, l, y (dólar,
        libra, yen).
        Según el carácter introducido por el usuario el programa debe convertir la cantidad monetaria
        (que serán euros) a la moneda correspondiente. No es preciso que el tipo de cambio sea real.
*/

window.addEventListener("DOMContentLoaded", () => {

    const CANTIDAD_DINERO = prompt("cantidad monetaria");
        const MONEDA = prompt("carácter d, l, y (dólar, libra, yen)");

        switch (true) {
            case MONEDA == "d":
            resultado = CANTIDAD_DINERO * 1.09
                console.log(resultado + " dolares");
                break;
            case MONEDA == "l":
            resultado = CANTIDAD_DINERO * 0.89
                console.log(resultado + " libras");
                break;
            case MONEDA == "y":
            resultado = CANTIDAD_DINERO * 1.34
                console.log(resultado + " yennes");
                break;
            
            default:
                console.log("Error introduce un numero");
                break;
        }

});