/* 
    EJERCICIO 1 (3 puntos)
    Crea un programa que solicite un número y haga una cuenta atrás. Es decir, una lista de
    números separados por comas que vaya desde el número tecleado hasta el 0.
    Ejemplo: Si se introduce el número 5, deberá mostrar 5,4,3,2,1,0.
    Haz este ejercicio usando los 3 bucles: while, do while y for.
*/
/* 
        let num= prompt("ingresar un número");

        while (num >= 0){
            console.log(num)
            num--;
        }
*/
/* 
        let num= prompt("ingresar un número");
        do {
            console.log(num)
            num--;
        }
        while (num >= 0);
*/

let num = prompt("ingresar un número");

for (num; num >= 0; num--) {
    console.log(num);

}