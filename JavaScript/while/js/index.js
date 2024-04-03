window.addEventListener('load', function (e) {




    // visualizar numeros del 1 al 10

    /*

    var numero = 1;

    while (numero<=10){
        console.log (numero);
       numero= ++numero;
    }

    */


    // visualizar numeros del 10 al 1


    /*

    var numero = 10;

    while (numero >= 1) {
        console.log(numero);
        numero = --numero;
    }

    */

    // visualizar numeros pares del 1 al 50

    /*

    var numero = 2;

    while (numero <= 50) {
        console.log(numero);
        numero = numero+2;
    }

    */



    // visualizar numeros impares del 1 al 50

    /*

    var numero = 1;

    while (numero <= 50) {
        console.log(numero);
        numero = numero+2;
    }

    */

    // visualizar numeros  del 1 al 10 y del 10 al 1

    /*
    var numero = 1;
    var numerores = 10;

    while (numero <= 10 && numerores >= 1) {

        console.log(numero+" - "+numerores)

        ++numero;
        --numerores;

       
    }
    */


    // visualizar numeros del 1 al 10 y del 10 al 1 forma 2

    var numero = 1;
    var numerores = 10;

    while (numero <= 10 || numerores >= 1) {

        if (numero <= 10) {
            console.log(numero);
            ++numero;

        } else {
            console.log(numerores);
            --numerores;
        }
       
    }

    



});