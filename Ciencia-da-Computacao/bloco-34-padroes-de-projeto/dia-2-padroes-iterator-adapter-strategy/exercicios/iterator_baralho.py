# Exercício 2: Dado o código abaixo de um baralho e suas cartas, você deve
# transformá-lo em um iterador sequencial, que fornece as cartas em sua
# ordem tradicional, começando de <A de copas> até <K de paus>.

# from collections.abc import Iterable, Iterator


# class Carta:
#     def __init__(self, valor, naipe):
#         self.valor = valor
#         self.naipe = naipe

#     def __repr__(self):
#         return "<%s de %s>" % (self.valor, self.naipe)


# class Baralho:
#     naipes = "copas ouros espadas paus".split()
#     valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

#     def __init__(self):
#         self._cartas = [
#             Carta(valor, naipe)
#             for naipe in self.naipes
#             for valor in self.valores
#         ]

#     def __len__(self):
#         return len(self._cartas)

#     def get_baralho(self):
#         return self._cartas


# class DatabaseIterator(Iterator):
#     def __init__(self, baralho):
#         self.baralho = baralho
#         self.current_index = 0

#     def __next__(self):
#         try:
#             card = self.baralho[self.current_index]
#         except IndexError:
#             raise StopIteration()
#         else:
#             self.current_index += 1
#             return card


# class DatabaseIterable(Iterable):
#     def __init__(self, baralho):
#         self.baralho = baralho

#     def __iter__(self):
#         return DatabaseIterator(self.baralho)


# baralho = Baralho().get_baralho()
# iterador_baralho = DatabaseIterable(baralho)

from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos += 1
            return carta


class Baralho(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorDoBaralho(self._cartas)


# baralho = Baralho()


# Exercício 3: Com o baralho tradicional pronto, implemente uma subclasse de Baralho chamada BaralhoInverso, que produz um iterador para fornecer as cartas na ordem inversa. Ou seja, sem embaralhar, a primeira carta deve ser o <K de paus> em vez do <A de copas>, como acontece na implementação atual.


class IteradorBaralhoInverso(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = -1

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos -= 1
            return carta


class BaralhoInverso(Baralho):
    def __init__(self):
        super().__init__()

    def __iter__(self):
        return IteradorBaralhoInverso(self._cartas)


baralho_inverso = BaralhoInverso()

# Exercício 4: Agora que você tem duas formas diferentes de dar cartas para o seu baralho, refatore o código para não precisar mais de dois baralhos e dois iteradores isolados, mas sim usar um único iterador com duas estratégias diferentes de iteração.


class BaralhoUnico(Iterable):
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self, invertido):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]
        self._invertido = invertido

    def __len__(self):
        return len(self._cartas)

    def __iter__(self):
        return IteradorUnico(self._cartas, self._invertido)


class IteradorUnico(Iterator):
    def __init__(self, cartas, invertido):
        self._cartas = cartas
        self._invertido = invertido
        self._index_invertido = -1
        self._index = 0

    def __next__(self):
        if self._invertido:
            try:
                carta = self._cartas[self._index_invertido]
            except IndexError:
                raise StopIteration()
            else:
                self._index_invertido -= 1
                return carta
        else:
            try:
                carta = self._cartas[self._index]
            except IndexError:
                raise StopIteration()
            else:
                self._index += 1
                return carta


baralho_unico = BaralhoUnico(False)

if __name__ == "__main__":
    # for card in baralho:
    #     print(card)

    # for card in baralho_inverso:
    #     print(card)

    for card in baralho_unico:
        print(card)
