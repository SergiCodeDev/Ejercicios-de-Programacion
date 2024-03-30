"""
/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
"""

def numprimo():
    for x in range(2,100):
        primo = True

        for comrpbarx in range(2,x):
            if x % comrpbarx == 0:
                primo = False
                exit
            

        if primo == True:
            print(f"{x} es primo")
        else:
            print(x)

numprimo()