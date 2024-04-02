let personaje = {
    nombre: "Carles",
    edad: 22,
    altura: 1.80,
    
};

console.log(personaje);


console.log(personaje.nombre);
console.log(personaje['nombre']);


let personaje2 = {
    nombre: "David",
    edad: {
        viejo: 80,
        joven: 30,
        niño: 10,
    },
    altura: 1.70,
    
};

console.log(personaje2.edad.joven)

delete personaje.altura // eliminar altura

console.log(personaje2)
