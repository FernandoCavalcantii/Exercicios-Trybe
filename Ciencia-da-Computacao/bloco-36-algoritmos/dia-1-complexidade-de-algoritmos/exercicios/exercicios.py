# Exercício 1 Dado um array de números de tamanho n, escreva um algoritmo que retorna true se há no array um número duplicado e false caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False


# Resp - O(n log n) + O(n) => O(n log n) ou O(n * log n)


# 🚀 Exercício 2 Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado um array bidimensional com n linhas e m colunas, e um par de coordenadas x para linhas e y para colunas, o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:

# entrada = [ 0 0 0 0 1
#             0 0 0 0 1
#             1 1 1 1 1
#             0 0 0 1 0 ]

# resultado para (0, 4) = True
# resultado para (1, 1) = False

# Resp:

""" Mesmo para um array bidimensional, o acesso a um elemento é O(1).
A complexidade de espaço também é O(1), pois não consideramos a entrada em seu cálculo, a saída é sempre True ou False"""


def battleship(grid, line, column):
    if grid[line][column] == 1:
        return True

    return False


# 🚀 Exercício 3 Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um desses números deve ser a média de n números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?


import random


def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages


# O(n) + O(n)

""" Mesmo que, para o exemplo dado, o valor de `n` seja muito menor que o valor da constante `100`, para valores de `n` grandes o valor da constante se torna desprezível. Esse problema, então, é `O(n)`. Pelo mesmo motivo, a complexidade de espaço é constante, ou seja, `O(n)`"""


# Exercício 4 Dado um array de doces candies e um valor inteiro extra_candies, onde o candies[i] representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a análise de complexidade de espaço também.


def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
# print(kids_with_candies([2, 3, 5, 1, 3], 3))

# Resp: melhor caso: O(1) + O(1) => O(1) / pior caso: O(n) + O(n) => O(n) / médio: O(n/2) + O(n/2) => O(n/2) / Espaço: O(n)
