/* 
        EJERCICIO 8 (1 punto)
        Crea un programa que solicite al usuario un dorsal de jugador y haga lo siguiente: comprobar
        que ese número está entre 0 y 99.
        Si no lo está, entonces el programa debe terminar con un mensaje de error.
        Si el número está entre 0 y 99 el programa debe mostrar un texto con la posición que
        corresponde a cada dorsal:
        • Si el usuario ha tecleado 1 el texto será “Portero”
        • Si el usuario ha tecleado 3,4,5 el texto será “Defensa”
        • Si el usuario ha tecleado 6, 8, 11 el texto será “Centro campista”
        • Si el usuario ha tecleado 9 el texto será “Delantero”.
        • Para cualquier otra opción el texto será “Cualquiera”.
*/

window.addEventListener("DOMContentLoaded", () => {

    const NDORSAL = prompt("Numero dorsal de jugador del 0 al 99");

        switch (true) {
            case NDORSAL > 99 || NDORSAL < 0:
                console.log("Error");
                break;
            case NDORSAL == "1":
                console.log("Portero");
                break;
            case NDORSAL == "3" || NDORSAL == "4" || NDORSAL == "5":
                console.log("Defensa");
                break;
            case NDORSAL == "6" || NDORSAL == "8" || NDORSAL == "11":
                console.log("Centro campista");
                break;
            case NDORSAL == "9":
                console.log("Delantero");
                break;
            default:
                console.log("Cualquiera");
                break;
        }

});