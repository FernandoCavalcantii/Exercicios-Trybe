from abc import ABC, abstractmethod


class Imposto(ABC):
    @classmethod
    @abstractmethod
    def calcular_imposto(self):
        raise NotImplementedError


class Orcamento:
    def __init__(self, valor: int):
        self.valor = valor

    def calcular_imposto(self, imposto: Imposto):
        return imposto.calcular_imposto(self.valor)


class ISS(Imposto):
    def calcular_imposto(self, valor):
        return valor * 0.1


class ICMS(Imposto):
    @classmethod
    def calcular_imposto(self, valor):
        return valor * 0.06


class PIS(Imposto):
    @classmethod
    def calcular_imposto(self, valor):
        return valor * 0.065


orcamento = Orcamento(1000)
print(orcamento.calcular_imposto(PIS))
