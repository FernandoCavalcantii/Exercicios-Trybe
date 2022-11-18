import copy
from typing_extensions import Self


class Conjunto:
    def __init__(self) -> None:
        self.list = [False for x in range(1000)]

    def __str__(self):
        my_set = set()
        for value in self.list:
            if type(value) == int:
                my_set.add(value)
        return str(my_set)

    def __contains__(self, item):
        # retorno: True, caso o elemento faça parte. False, caso o elemento não faça parte.
        el = self.list[item]
        if type(el) == bool:
            return False
        return True

    def turn_to_set(self, lst):
        my_set = set()
        for value in lst:
            if type(value) == int:
                my_set.add(value)
        return str(my_set)

    def union(self, conjuntoB: Self):
        my_list = copy.deepcopy(self.list)
        conjuntoB = conjuntoB.get_all()
        for el in conjuntoB:
            if type(el) != bool:
                my_list[el] = el
        return self.turn_to_set(my_list)

    def difference(self, conjuntoB: Self):
        my_list = copy.deepcopy(self.list)
        conjuntoB = conjuntoB.get_all()
        for el in conjuntoB:
            if type(el) == int:
                my_list[el] = False
        return self.turn_to_set(my_list)

    def get_all(self):
        return self.list

    def add_item(self, int):
        self.list[int] = int

    def intersection(self, conjuntoB: Self):
        counter_dict = {}

        for el in self.list:
            if type(el) == int:
                counter_dict[el] = el

        conjuntoB = conjuntoB.get_all()
        intersection_set = set()

        for el in conjuntoB:
            if counter_dict[el]:
                intersection_set.add(el)

        return intersection_set

    def issuperset(self, conjuntoB: Self):
        conjuntoB = conjuntoB.get_all()
        for el in conjuntoB:
            if el == 0 and type(el) == int and type(self.list[el]) == int:
                continue
            if self.list[el] == False and type(el) != bool:
                return False
        return True

    def issubset(self, conjuntoB: Self):
        conjuntoB = conjuntoB.get_all()
        for el in self.list:
            if el == 0 and type(el) == int and type(conjuntoB[el]) == int:
                continue
            if conjuntoB[el] == False and type(el) != bool:
                return False
        return True


# Sua trajetória no curso foi um sucesso e agora você está trabalhando para a Trybe! Em um determinado módulo, os estudantes precisam entregar dois trabalhos para seguir adiante. Cada vez que um dos trabalhos é entregue, o nome da pessoa fica registrado. Precisamos saber como está o andamento da entrega das listas. Para isso, você tem acesso aos nomes das pessoas da turma, bem como ao log de quem já entregou qual lista. A partir das listas abaixo, utilize a classe já criada e imprima os resultados das perguntas abaixo:


estudantes = set([1, 2, 3, 4, 5, 6, 7])
lista1_entregues = set([1, 4, 7, 3])
lista2_entregues = set([3, 1, 6])

# Quem ainda não entregou a lista1?

print(estudantes.difference(lista1_entregues))

# Quem já entregou as duas listas?

print(lista1_entregues.intersection(lista2_entregues))

# Quem já entregou qualquer uma das duas listas?

print(lista1_entregues.union(lista2_entregues))


# Quem ainda não entregou nenhuma das listas?

print(estudantes.difference(lista1_entregues, lista2_entregues))

# if __name__ == "__main__":
# a = Conjunto()
# b = Conjunto()
# c = Conjunto()
# a.add_item(0)
# a.add_item(1)
# a.add_item(2)
# b.add_item(0)
# b.add_item(1)
# c.add_item(3)
# c.add_item(2)

# print(a.issubset(b))
# print(b.issuperset(a))

# set_a = set([1])
# set_b = set([2])
# set_a.union(set_b)
# print(set_a)
