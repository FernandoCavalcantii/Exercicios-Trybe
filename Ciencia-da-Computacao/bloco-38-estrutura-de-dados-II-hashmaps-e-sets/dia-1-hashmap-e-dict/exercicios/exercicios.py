# 1. Você receberá uma lista de palavras e uma string. Escreva uma função que decida quais palavras podem ser formadas com os caracteres da string (cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento das palavras escolhidas.

import copy


words = ["cat", "bt", "hat", "tree"]
chars = "atach"


def word(lst, word):
    word_dict = {}

    for char in word:
        if char not in word_dict:
            word_dict[char] = 1
        else:
            word_dict[char] += 1

    word_dict_2 = copy.deepcopy(word_dict)
    result = []

    for word in lst:
        possible_word = True
        for char in word:
            if char not in word_dict_2 or word_dict_2[char] == 0:
                possible_word = False
                break
            else:
                word_dict_2[char] -= 1
        if possible_word:
            result.append(word)
        possible_word = True
        word_dict_2 = word_dict

    return result


# print(word(words, chars))


# 2. Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

# Escreva um método que calcule o score de uma determinada pessoa.


subordinates = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
}


def score(employee):
    emp_score = 1

    if subordinates[employee] == []:
        return emp_score

    for subordinate in subordinates[employee]:
        emp_score += score(subordinate)

    return emp_score


# print(score(1))
