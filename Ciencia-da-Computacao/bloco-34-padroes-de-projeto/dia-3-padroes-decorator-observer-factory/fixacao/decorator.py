class Calculadora:
    def soma(self, x, y):
        return x + y


# Parece que está funcionando bem, caso sejam passados os parâmetros x e y
# como números. Porém, recebemos a missão de criar uma calculadora que
# consiga interpretar números escritos por extenso, reconhecendo em inglês
# ou em português, dependendo de como a pessoa usuária preferir

# Mas esta classe Calculadora() é utilizada em outros lugares do sistema,
# então o time de desenvolvimento decidiu que não podemos alterá-la. A
# solução será criar uma nova classe que atenda às nossas necessidades,
# mas como a pessoa usuária poderá escolher, optaremos por criar uma
# calculadora decorada utilizando o Padrão Decorator:


class CalculadoraDecorada:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero):
        if not isinstance(numero, str):
            return numero

        # Neste cenário, em vez de fazermos IF e else... podemos usar o
        # dicionário conseguimos acessar obter o valor a partir da chave
        return {
            "um": 1,
            "dois": 2,
            "três": 3,
            "quatro": 4,
            "cinco": 5,
            "seis": 6,
            "sete": 7,
            "oito": 8,
            "nove": 9,
            "dez": 10,
        }.get(numero)

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )


class CalculadoraDecoradaIngles:
    def __init__(self, calculadora: Calculadora) -> None:
        self.calculdora = calculadora

    def convertInt(self, int):
        if not isinstance(int, str):
            return int

        return {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,
            "ten": 10,
        }.get(int)

    def soma(self, int1, int2):
        converted_int1, converted_int2 = self.convertInt(
            int1
        ), self.convertInt(int2)

        return self.calculdora.soma(converted_int1, converted_int2)


if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 20 =", calculadora.soma(10, 20))

    calculadoraDecorada = CalculadoraDecorada(calculadora)
    print("'oito' + 'dois' =", calculadoraDecorada.soma("oito", "dois"))

    calculadoraDecoradaIngles = CalculadoraDecoradaIngles(calculadora)
    print("'three' + 'two' =", calculadoraDecoradaIngles.soma("three", "two"))
