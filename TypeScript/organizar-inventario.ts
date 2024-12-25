interface Producto {
    categoria: string;
    nombre: string;
    cantidad: number;
}

interface Inventario extends Array<Producto> {}

interface BufferInventario {
    [categoria: string]: {
        [nombre: string]: number;
    };
}

function organizarInventario(inventario: Inventario): BufferInventario {
    const buffer: BufferInventario = {}
    for (const {categoria, nombre, cantidad} of inventario) {
        buffer[categoria] ??= {}
        buffer[categoria][nombre] ??=0
        buffer[categoria][nombre] += cantidad
    }
    return buffer
}

function organizarInventarioConMap(inventario: Inventario): Map<string, Map<string, number>> {
    const buffer = new Map<string, Map<string, number>>();
    for (const { categoria, nombre, cantidad } of inventario) {
        let categoriaBuffer = buffer.get(categoria);
        if (!categoriaBuffer) {
            categoriaBuffer = new Map<string, number>();
            buffer.set(categoria, categoriaBuffer);
        }
        let cantidadExistente = categoriaBuffer.get(nombre) || 0;
        categoriaBuffer.set(nombre, cantidadExistente + cantidad);
    }
    return buffer;
}