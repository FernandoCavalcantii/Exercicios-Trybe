# 🚀Exercício 1 Em um software monitor, o qual verifica a resiliência de outro software, precisamos saber o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.

# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def max_hours_without_instability(hours_list):
    max_hours = 0
    counter = 0

    for hour in hours_list:
        if hour == 1:
            counter += 1
            if counter > max_hours:
                max_hours = counter
        else:
            counter = 0

    return max_hours


# Complexidade: O(n)

# ____________________________________________________________________________________ #

# Exercício 2 Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]

import random
import re


def cards_shuffler(cards):
    mid = len(cards) // 2
    last_index = len(cards)

    first_part = cards[0:mid]
    second_part = cards[mid:last_index]

    if len(first_part) == len(second_part):
        for i in enumerate(first_part):
            rnd_index = random.randint(0, mid - 1)
            first_part[i[0]], first_part[rnd_index] = (
                first_part[rnd_index],
                first_part[i[0]],
            )
            second_part[i][0], second_part[rnd_index] = (
                second_part[rnd_index],
                second_part[i[0]],
            )
    else:
        for i in enumerate(first_part):
            rnd_index_first_part = random.randint(0, mid - 1)
            first_part[i[0]], first_part[rnd_index_first_part] = (
                first_part[rnd_index_first_part],
                first_part[i[0]],
            )
            rnd_index_second_part = random.randint(0, mid)
            second_part[i[0]], second_part[rnd_index_second_part] = (
                second_part[rnd_index_second_part],
                second_part[i[0]],
            )

    print(first_part + second_part)


# Complexidade: O(log n)

# ____________________________________________________________________________________________ #

# Exercício 3 Imagine que você esteja trabalhando em um e-commerce, e foi lhe dado a demanda de analisar um array de números inteiros que representam os produtos dessa empresa. Verifique quantos produtos formam boas combinações, ou seja, quando um produto é igual ao outro e seu índice é maior que o anterior. Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def count_repeateds(products):
    counter = 0
    length = len(products)

    for index in range(length):
        current_product = products[index]

        for i in range(index, length):
            if index == i:
                continue
            if products[i] == current_product:
                counter += 1

    print(counter)


# Complexidade O(n²)

# ___________________________________________________________________________ #

# Exercício 4 Você têm dois arrays de números inteiros que representam: (I) instantes de entrada e saídas em uma biblioteca (II) um número que represente um instante a ser buscado. Retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante que entrou e saiu da biblioteca.

entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def students_in_given_hour(entries, exit, search_hour):
    length = len(entries)
    counter = 0

    for index in range(length):
        if entries[index] <= search_hour <= exit[index]:
            counter += 1

    print(counter)


# Outra alternativa:


def students_in_instant(arrivals, departures, time_instant):
    return sum(
        arrival < time_instant < departure
        for arrival, departure in zip(arrivals, departures)
    )


# Complexidade O(n)

# ________________________________________________________________________________________ #

# Exercício 5 Em um software gerenciador de servidores, precisamos verificar o número de servidores que se comunicam. Os servidores estão representados como um array bidimensional onde o valor 1 representa um computador e 0 a ausência do mesmo. Dois servidores se comunicam se eles estão na mesma linha ou mesma coluna.

# servidores =  [[1,0],[0,1]]
# resultado: 0
# Linhas e colunas são diferentes.

# servidores = [[1, 0], [1, 1]]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

servidores = [[1, 0, 0], [1, 0, 0], [0, 0, 1]]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.

import copy


def connected_servers(lst):
    general_counter = 0
    row_counter = 0
    column_counter = 0
    repeated_counter = 0
    lst_length = len(lst)
    sub_lst_length = len(lst[0])
    copy_list = copy.deepcopy(lst)

    for index, row in enumerate(lst):
        for i, num in enumerate(row):
            if num == 1:
                row_counter += 1
        if row_counter > 1:
            general_counter += row_counter
            for i in range(sub_lst_length):
                copy_list[index][i] = "1"

        row_counter = 0

    for column in range(sub_lst_length):
        for row in range(lst_length):
            if lst[row][column] == 1:
                column_counter += 1
            if copy_list[row][column] == "1":
                repeated_counter += 1

        if column_counter > 1:
            general_counter += column_counter - repeated_counter

        column_counter = 0
        repeated_counter = 0

    print(general_counter)


connected_servers(servidores)
