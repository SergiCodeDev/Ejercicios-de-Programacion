function cambiarcolor(a){
    return () => {
        document.querySelector("#hola").style.backgroundColor = a;
     }
        
    
}


let uno = document.querySelector("#uno");
let dos = document.querySelector("#dos");
let tres = document.querySelector("#tres");


uno.addEventListener("click", cambiarcolor("red"));
dos.onclick = cambiarcolor("yellow");
tres.onclick = cambiarcolor("pink");
        

