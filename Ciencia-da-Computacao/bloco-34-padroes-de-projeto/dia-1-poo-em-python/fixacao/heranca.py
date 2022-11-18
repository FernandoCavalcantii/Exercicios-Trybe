class Eletrodomestico:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False
        self.__amperagem_atual_no_motor = 0

    def ligar(self, velocidade):
        self.__velocidade = velocidade
        self.__amperagem_atual_no_motor = (
            (self.__potencia / self.__voltagem) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    # Getter
    @property
    def cor(self):
        return self.__cor

    # Setter
    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor


class Liquidificador(Eletrodomestico):  # Exemplo de Herança
    def __init__(self, cor, potencia, voltagem, preco):
        # chamando o método da classe mãe
        super().__init__(cor, potencia, voltagem, preco)


class Geladeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco, quantidade_de_portas=1):
        super().__init__(cor, potencia, voltagem, preco)
        # sobrescrita do método da classe mãe
        self.quantidade_de_portas = quantidade_de_portas


class Microondas(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)

    def __str__(self):
        return "Microondas"


class Fogao(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco, quantidade_de_bocas):
        super().__init__(cor, potencia, voltagem, preco)
        self.quantidade_de_bocas = quantidade_de_bocas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permitindo a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico: Eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomesticos.append(eletrodomestico)

    def __str__(self):
        return f"""
        {self.nome} possui: R$ {self.saldo_na_conta} e estes eletrodomésticos:
        {self.eletrodomesticos}
        """


microondas_azul = Microondas("Azul", 500, 1000, 250)
fogao_cinza = Fogao("Cinza", 1000, 2000, 5000, 4)
fernando = Pessoa("Fernando", 9000)

if __name__ == "__main__":
    print(microondas_azul.preco)
    fernando.comprar_eletrodomestico(microondas_azul)
    print(fernando)
