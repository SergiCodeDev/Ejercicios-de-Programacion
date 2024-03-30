"""
/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
"""

def sumardosnum():

    cero = 0

    num1 = 0
    num2 = 1
    
    print(num1)
    print(num2)

    while cero <= 50:
        cero += 1

        resultadofinal = num2 + num1
        print(resultadofinal)
        num1 = num2
        num2 = resultadofinal

sumardosnum()