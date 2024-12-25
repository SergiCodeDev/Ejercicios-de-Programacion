export function ordenarNumeros(arrayNumeros: number[]): number[] {
    const numeros = new Set<number>(arrayNumeros)
    return Array.from(numeros).sort((a,b) => a - b)
}