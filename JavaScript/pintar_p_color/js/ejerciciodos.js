var parrafos = document.getElementsByTagName("p");
for(pintar=1; pintar<parrafos.length; pintar = pintar+2 ){
    parrafos[pintar].classList.add("fondo");
}