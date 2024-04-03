
//visualizar en navegador

window.addEventListener("load", function(e) {
    
    var precio_kilometro = 0;
    var veiculo = "";
    var kms_recorridos = 0;
    var litros_consumidos = 0;



    veiculo = prompt("Que veiculo esta usando? coche , moto , autobus");
    kms_recorridos = parseFloat (prompt("Cuantos kilometros recorristes?"));
    litros_consumidos = parseFloat (prompt("Cuantos litros has consumido?"));


    if (veiculo == "coche") {
        precio_kilometro=0.1;
    }
    if (veiculo == "moto") {
        precio_kilometro=0.2;
    }
    if (veiculo == "autobus") {
        precio_kilometro=0.5;
    }

    var totalkm = kms_recorridos*precio_kilometro;
    var total;

    if (litros_consumidos<=100){

        total = totalkm+1;
    } else {
        total = totalkm+2;
    }

    console.log("Veiculo - "+veiculo);
    console.log("Kilometros X Precio = "+kms_recorridos+" x "+precio_kilometro+" = "+totalkm+" €");
    console.log("Total presupuesto - "+total+" €");






});