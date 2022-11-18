# 1. Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive. A pontuação final é calculada da seguinte forma:

# A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
# O redutor é o menor numero que a outra pessoa não escolheu;
# A pontuação final é a nota de partida - redutor.

players = {"fernando": [3, 6, 7, 8, 9], "jhon": [4, 5, 6, 7, 8]}


def guess_game(players):
    keys = list(players.keys())
    player_1, player_2 = sorted(players[keys[0]]), sorted(players[keys[1]])

    player_1_remainder = [n for n in player_1 if not n in player_2]
    player_2_remainder = [n for n in player_2 if not n in player_1]

    player_1_result, player_2_result = (
        player_1_remainder[1] - player_1_remainder[0],
        player_2_remainder[1] - player_2_remainder[0],
    )

    if player_1_result > player_2_result:
        print(f"{keys[0]} ganhou com {player_1_result} pontos.")
    else:
        print(f"Jogador {keys[1]} ganhou com {player_2_result} pontos.")


# guess_game(players)


# _______________________________________________________________________________________________ #


# 2. Dada uma string, ache o tamanho da maior substring que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: O(n²).

string = "abcdeefghiijklmnoopqrs"

# Minha resposta O(n)


def biggest_substr(str):
    counter_dict = {}
    biggest_len = 0
    biggest_len_index = 0
    index = 0

    for char in str:
        if index not in counter_dict:
            counter_dict[index] = {"sub_str": char, "length": 1}
            continue
        if char == counter_dict[index]["sub_str"][-1]:
            if counter_dict[index]["length"] > biggest_len:
                biggest_len = counter_dict[index]["length"]
                biggest_len_index = index
            index += 1
            counter_dict[index] = {"sub_str": char, "length": 1}
        else:
            counter_dict[index]["sub_str"] += char
            counter_dict[index]["length"] = len(counter_dict[index]["sub_str"])
            if counter_dict[index]["length"] > biggest_len:
                biggest_len = counter_dict[index]["length"]
                biggest_len_index = index

    print(
        f"{counter_dict[biggest_len_index]['sub_str']} é a maior substring com {biggest_len} caracteres"
    )


biggest_substr("abcdeefghijjklmnoppqrstuvx")

# Resp Trybe O(n²) utilizando set:


def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest
