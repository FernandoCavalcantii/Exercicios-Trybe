# Exercício 1: Faça um programa que receba um nome e imprima o mesmo
# na vertical em escada invertida.


# def printer(name):
#     name_length = len(name)

#     for letter in name:
#         printed_name = ""
#         for i in range(0, name_length):
#             printed_name += name[i]

#         print(printed_name)
#         name_length -= 1


# printer("Fernando")

# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa
# usuária tenha que adivinhar uma palavra que será mostrada com as letras
# embaralhadas. O programa terá uma lista de palavras e escolherá uma
# aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao
# final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou
# perdeu o jogo.

# import random


# def unscramble_the_word():
#     chosen_word = random.choice(["peixe", "avião", "casaco"])
#     scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))

#     print(f"A palavra sorteada é: {scrambled_word}")

#     user_answer = input("Qual é a palavra desembaralhada? ")

#     trys = 2

#     while trys > 0 and chosen_word != user_answer:
#         print("Resposta errada")
#         user_answer = input(
#             "Mais uma tentativa, qual é a palavra desembaralhada? "
#         )
#         trys -= 1

#     if trys == 0:
#         print(f"Você perdeu! A palavra correta era {chosen_word}")

#     print(f"Parabéns! A palavra correta era {chosen_word}")


# unscramble_the_word()


# Exercício 3: Modifique o exercício anterior para que as palavras sejam lidas
# de um arquivo. Considere que o arquivo terá cada palavra em uma linha.


# import csv
# import random


# def unscramble_the_word():

#     with open("words.csv", encoding="utf-8") as file:
#         reader = csv.reader(file, delimiter=",")
#         header, *data = reader

#     words = []

#     for i in data:
#         words.append(i[0])

#     chosen_word = random.choice(words)
#     scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))

#     print(f"A palavra sorteada é: {scrambled_word}")

#     user_answer = input("Qual é a palavra desembaralhada? ")

#     trys = 2

#     while trys > 0 and chosen_word != user_answer:
#         print("Resposta errada")
#         user_answer = input(
#             "Mais uma tentativa, qual é a palavra desembaralhada? "
#         )
#         trys -= 1

#     if trys == 0:
#         print(f"Você perdeu! A palavra correta era {chosen_word}")

#     print(f"Parabéns! A palavra correta era {chosen_word}")


# if __name__ == "__main__":
#     unscramble_the_word()

import csv
import json

with open("books.json") as file:
    books = json.load(file)

total_books = len(books)
categories_counter = {}

for book in books:
    for category in book["categories"]:
        if category not in categories_counter:
            categories_counter[category] = 0
        categories_counter[category] += 1

# print(categories_counter)
with open("categories_counter.json", "w") as file:
    writer = csv.writer(file)
    headers = [
        "Categoria",
        "Porcentagem",
    ]

    writer.writerow(headers)

    for (
        category,
        total,
    ) in categories_counter.items():
        row = [
            category,
            total / total_books,
        ]
        writer.writerow(row)
