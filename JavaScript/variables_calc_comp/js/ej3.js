/*
        EJERCICIO 3 (0.5 puntos)
        ¿Qué resultados se obtienen de las siguientes operaciones booleanas? Escribe un programa
        que realice todas las operaciones y las muestre por consola.
        let x = 4;
        let y = 6;
        a) (x > 0)
        b) (x > 0) || (y>7)
        c) (x <= 4) && (y != 4)
        d) !( (x < 4) && (y >42))
        e) !(x < 4) || !(y >42)
*/

const x = 4;
const y = 6;
const a = x > 0;
console.log("Resultado de a: " + a);
const b = x > 0 || y > 7;
console.log("Resultado de b: " + b);
const c = x <= 4 && y != 4;
console.log("Resultado de c: " + c);
const d = !((x < 4) && (y > 42));
console.log("Resultado de d: " + d);
const e = !(x < 4) || !(y > 42);
console.log("Resultado de e: " + e);