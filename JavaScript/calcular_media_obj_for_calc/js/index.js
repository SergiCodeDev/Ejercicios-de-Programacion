
let alumno = {
    nombre: "Juan",
    calificaciones: {
        ingles: 85,
        programacion: 90,
        html: 88
    }
};

function calcularMedia(calificaciones) {
    let total = 0;
    let numMaterias = 0;

    for (let materia in calificaciones) {
        total += calificaciones[materia];
        numMaterias++;
    }

    return (total / numMaterias).toFixed(2);
}

console.log("Nombre del alumno: " + alumno.nombre);
console.log("Media de las calificaciones: " + calcularMedia(alumno.calificaciones));