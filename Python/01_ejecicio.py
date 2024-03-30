"""
/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
"""

def comparar(palabra1,palabra2):

    convert1 = palabra1.lower()
    convert2 = palabra2.lower()

    if convert1 == convert2:
        return False
    else:
        return sorted(convert1) == sorted(convert2)
    
print(comparar("hola", "hola"))
print(comparar("aloh", "hola"))
print(comparar("manta", "momia"))