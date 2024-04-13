function funcionSinParametro() {
    for (const valor of arguments) {
        console.log(valor)
    }
 };
 
 funcionSinParametro( 43, true, "hola" );