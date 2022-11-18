# 🚀 Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).


# def count_pairs(n):
# pairs = []
# for num in range(1, n + 1):
# if num % 2 == 0:
# pairs.append(num)
# print(len(pairs))


# 🚀 Exercício 2: Transforme o algoritmo criado acima em recursivo.


def count_pairs(n):
    if n == 0:
        return 0
    elif n % 2 != 0:
        return 0 + count_pairs(n - 1)
    else:
        return 1 + count_pairs(n - 1)


# 🚀 Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.


def biggest_num(lst):
    if len(lst) == 1:
        return lst[0]
    if lst[0] > lst[1]:
        lst.remove(lst[1])
        return biggest_num(lst)
    else:
        lst.remove(lst[0])
        return biggest_num(lst)


# print(biggest_num([10, 5, 8, 11, 20, 4]))


# 🚀 Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.


def recursive_mdc(int1, int2):
    mdc = 0

    if int1 > int2:
        mdc = int1
    else:
        mdc = int2

    def auxiliary_mdc(mdc):
        if int1 % mdc == 0 and int2 % mdc == 0:
            return mdc
        else:
            return auxiliary_mdc(mdc - 1)

    result = auxiliary_mdc(mdc)
    return result


# Resp Trybe:


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


# print(recursive_mdc(9, 12))


# Exercício 5: Escreva um algoritmo recursivo que identifica se um número é primo.


def is_prime(n):
    if n <= 2:
        return "Not prime"

    def division_rest(int1, int2):
        if int2 == 1:
            return "Prime"
        if int1 % int2 == 0:
            return "Not prime"
        else:
            return division_rest(int1, int2 - 1)

    return division_rest(n, n - 1)


# print(is_prime(1))


# Exercício 6: Escreva um algoritmo que recebe uma lista e retorne-a na ordem reversa.


def reverse(list):
    print(list)
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]


print(reverse([1, 2, 3, 4, 5]))
