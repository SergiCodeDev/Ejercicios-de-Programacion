function imprimirPorConsola(simbolo, ...mensajes) {
    mensajes.forEach(mensaje => {
        console.log(`${simbolo} ${mensaje}`)
    });
};

imprimirPorConsola("->","Hola mundo", "Div", "Java", "Rust")
