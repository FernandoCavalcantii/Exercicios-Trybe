from functools import reduce
import math
from collections import Counter


class Estatistica:
    def media(self, lista: list):
        result = reduce(lambda int1, int2: int1 + int2, lista) / len(lista)
        print(result)

    def mediana(self, lista: list):
        if len(lista) % 2 == 1:
            index = math.ceil(len(lista) / 2) - 1
            print(lista[index])
        else:
            int1 = lista[(int(len(lista) / 2) - 1)]
            int2 = lista[int(len(lista) / 2)]
            result = (int1 + int2) / 2
            print(result)

    # https://stackoverflow.com/questions/1518522/find-the-most-common-element-in-a-list
    def moda(self, lista):
        data = Counter(lista)
        print(data)
        print(max(lista, key=data.get))


exp = Estatistica()

lista_de_numeros = [1, 2, 2, 4, 5, 6]

# exp.media(lista_de_numeros)
# exp.mediana(lista_de_numeros)
exp.moda(lista_de_numeros)
