class Pessoa:
    # None é equivalente ao clássico NULL em outras linguagens
    def __init__(self, nome, idade=None, saldo_na_conta=None):
        self.idade = idade
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.brinquedos = []


pessoa_1 = Pessoa("Marcelo", 22, 700)
pessoa_2 = Pessoa("Matheus")
pessoa_3 = Pessoa("Matheus", 33)
pessoa_4 = Pessoa("Matheus", saldo_na_conta=100)


class Grafico:
    def __init__(self, dados):
        self.dados = dados

    def desenhar(self, tipo_de_grafico):
        if tipo_de_grafico == "GraficoBarras":
            self.__desenhar_grafico_barras()

        if tipo_de_grafico == "GraficoRadar":
            self.__desenhar_grafico_radar()

        if tipo_de_grafico == "GraficoPizza":
            self.__desenhar_grafico_pizza()

    def __desenhar_grafico_barras(self):
        print("Lógica para gráfico de barras")

    def __desenhar_grafico_radar(self):
        print("Lógica para gráfico radar")

    def __desenhar_grafico_pizza(self):
        print("Lógica para gráfico de Pizza")


grafico_1 = Grafico([1, 2])
grafico_1.desenhar("GraficoRadar")

# Este código não está muito bem implementado, pois iriamos ter que ir criando
# novos métodos a cada tipo de gráfico novo que fossemos adicionar.
# Para resolver, polimorfismo, vide abstract.py
