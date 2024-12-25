// js
// function cambiarNombreDelArchivo(nombreArchivo) {
//     const expresionRegular = new RegExp(/\d*_(?<resultado>.*\..*)\..*/g)
//     const {resultado} = expresionRegular.exec(nombreArchivo).groups
//     return resultado
// }

function cambiarNombreDelArchivo(nombreArchivo: string): string | null {
    const expresionRegular = new RegExp(/\d*_(?<resultado>.*\..*)\..*/g);
    const coincidencia = expresionRegular.exec(nombreArchivo);

    // Si no se encuentra el resultado, retornamos undefined
    if (!coincidencia?.groups?.resultado) {
        return null;
    }

    return coincidencia.groups.resultado;
}