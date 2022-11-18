from composicao import Pessoa


class Geladeira:
    def __init__(self, cor, preco, litros):
        self.cor = cor
        self.preco = preco
        self.litros = litros

    def __str__(self):
        return f"""
        Sou uma geladeira {self.cor} que custa {self.preco}.
        Tenho capacidade para {self.litros} litros.
        """


pessoa = Pessoa("Fernando", 9000)

geladeira_azul = Geladeira("Azul", 8000, 450)

pessoa.comprar_geladeira(geladeira_azul)

if __name__ == "__main__":
    print(pessoa)
