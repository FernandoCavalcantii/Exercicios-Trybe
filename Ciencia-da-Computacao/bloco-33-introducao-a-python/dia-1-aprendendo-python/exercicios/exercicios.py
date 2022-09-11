# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.


def biggest_num(intA, intB):
    if intA > intB:
        return intA

    return intB


# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def arithmetic_average(intList):
    result = 0

    for int in intList:
        result += int

    return result / len(intList)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
# Por exemplo:


def square(sideSize):
    asterisks = ""

    for row in range(sideSize):
        asterisks += "*"

    for i in range(sideSize):
        print(asterisks)


# Resposta Trybe:

# def draw_square(n):
#     for row in range(n):
#         print(n * '*')

# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o
# nome com a maior quantidade de caracteres. Por exemplo, para ["José",
# "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
#  o retorno deve ser "Fernanda".


def biggest_name(nameList):
    result = ""

    for name in nameList:
        if len(name) > len(result):
            result = name

    return result


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que
# custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas e o preço total
# a partir do tamanho de uma parede(em m²).


def total_paint_can_and_price(squareMeters):
    paint_liters = squareMeters / 3
    paint_cans = 0

    i = 0
    while i < paint_liters:
        paint_cans += 1
        i += 10

    total_price = paint_cans * 80
    return (paint_cans, total_price)


# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo", caso não
# seja possível formar um triângulo.


def triangle(sideA, sideB, sideC):
    sorted_sides = sorted([sideA, sideB, sideC])
    biggest_num = sorted_sides[-1]

    if (sorted_sides[0] + sorted_sides[1]) < biggest_num:
        return "Medidas dos lados passado não formam um triângulo"

    if sideA == sideB and sideB == sideC:
        return "Triângulo equilatero"

    if sideA == sideB or sideB == sideC or sideC == sideA:
        return "Triângulo isósleces"

    return "Triângulo escaleno"


print(triangle(5, 5, 10))
