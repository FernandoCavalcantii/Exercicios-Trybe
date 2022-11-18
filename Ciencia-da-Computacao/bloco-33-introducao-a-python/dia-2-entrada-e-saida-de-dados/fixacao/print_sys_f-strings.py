# print("Maria", "João", "Miguel", "Ana")  # saída: Maria João Miguel Ana
# print(
# "Maria", "João", "Miguel", "Ana", sep=", "
# )  # saída: Maria, João, Miguel, Ana

# print("Em duas ")
# print("linhas.")

# print("Na mesma", end=" ")
# print("linha.")

# ___________________________________________________________________

# import sys


# err = "Arquivo não encontrado"
# print(f"Erro aconteceu: {err}", file=sys.stderr)

# ____________________________________________________________________

# x = 5
# y = 3
# print(f"{x} / {y} = {x / y:.2f}")  # saída: 5 / 3 = 1.67
# {x} é substituído por 5
# {y} é substituído por 3
# {x / y:.2f} O que vem após os dois pontos são formatadores,
# como nesse exemplo, duas casas decimais (.2f).
# print(f"{x:.^5}")  # saída: "..5.."
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos


# def print_name():
#     name = input("Qual seu nome? ")

#     for letter in name:
#         print(letter)


# print_name()


def sum():

    user_input = input(
        "Digite os números que serão somados, separados por espaço: "
    )

    split_user_input = user_input.split(" ")

    result = 0

    for number in split_user_input:
        if not number.isdigit():
            return "Apenas números são aceitos"
        result += int(number)

    return result


print(sum())
