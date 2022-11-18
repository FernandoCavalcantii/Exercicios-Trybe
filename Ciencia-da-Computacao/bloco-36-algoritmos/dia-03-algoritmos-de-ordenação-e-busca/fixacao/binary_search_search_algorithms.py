import random


def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while (
        start <= end
    ):  # os índices podem ser no máximo iguais, o início não pode ultrapassar o fim
        mid = (start + end) // 2  # encontro o meio

        if (
            numbers[mid] == target
        ):  # se o elemento do meio for o alvo, devolve a posição do meio
            return mid

        if (
            target < numbers[mid]
        ):  # se o elemento for menor, atualiza o índice do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


def my_list():
    result = []
    for int in range(1000001):
        result.append(int)
    return result


numbers = my_list()
# target = 40


target = random.randint(1, 100000)
result = binary_search(numbers, target)
print(f"Elemento encontrado na posição: {result}")
