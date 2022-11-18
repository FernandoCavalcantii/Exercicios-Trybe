from getter_setter import Liquidificador


# from geladeira import Geladeira


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.geladeira = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_geladeira(self, geladeira):
        if geladeira.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self):
        return f"""Eu tenho geladeira? {self.geladeira}"""


# return (
#     f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."
# )
if __name__ == "__main__":
    liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)
    # geladeira_cinza = Geladeira("Cinza", 5000, 800)
    pessoa_cozinheira = Pessoa("Jacquin", 1000)
    pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
    # print(pessoa_cozinheira)
    # retorno: Pessoa object at 0x7f53bbe1b580>

    # Ao usar o print(obj), estamos convertendo o objeto em string.
    # Definindo o __str__, estamos dizendo o que deverá ser retornado
    # ao convertermos em string

    print(pessoa_cozinheira)
