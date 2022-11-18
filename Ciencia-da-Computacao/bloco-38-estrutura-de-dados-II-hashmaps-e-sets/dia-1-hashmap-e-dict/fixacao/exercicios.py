# 1. Num. mais frequente na array. Caso de empate, retornar qualquer um dos mais frequentes.

lst = [3, 1, 2, 3, 4, 5, 5, 5]  # Resp: 3


def most_frequent_int(lst):
    my_dict = {}
    most_frequent = lst[0]

    for num in lst:
        if num not in my_dict:
            my_dict[num] = 1
        else:
            my_dict[num] += 1

        if my_dict[num] > my_dict[most_frequent]:
            most_frequent = num

    return most_frequent


# print(most_frequent_int(lst))


# 2. Agrupe as palavras pela sua letra inicial

lst_2 = ["ana", "pedro", "abelardo", "roger", "petrucio", "bario"]


def group_by_first_letter(lst):
    result_dict = {}
    sorted_result_dict = {}

    for word in lst:
        first_char = word[0]
        if first_char not in result_dict:
            result_dict[first_char] = [word]
        else:
            result_dict[first_char].append(word)

    for key in sorted(result_dict):
        sorted_result_dict[key] = result_dict[key]

    return sorted_result_dict


# print(group_by_first_letter(lst_2))


# 3. Quais elementos da lista A também ocorrem na lista B? Ou seja, qual é a intersecção entre as listas


def intersecçao(lst_a, lst_b):
    my_dict = {}
    result = []
    for num in lst_a:
        my_dict[num] = num
    for num in lst_b:
        if my_dict[num]:
            result.append(num)
    return result


print(intersecçao([1, 2, 3, 4, 5], [3, 4]))
