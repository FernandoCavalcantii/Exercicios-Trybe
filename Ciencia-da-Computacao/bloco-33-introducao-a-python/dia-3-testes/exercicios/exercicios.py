# 🚀 Exercício 1: Escreva um programa que retorne uma lista com os
# valores numéricos de 1 a N, mas com as seguintes exceções:

# Números divisíveis por 3 deve aparecer como "Fizz" ao invés do número;
# Números divisíveis por 5 devem aparecer como "Buzz" ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como
# "FizzBuzz" ao invés do número.


def one_to_n_fizz_buzz(a, b):
    result_list = []

    for i in range(a, b + 1):
        if i % 3 == 0 and i % 5 == 0:
            result_list.append("FizzBuzz")
        elif i % 3 == 0:
            result_list.append("Fizz")
        elif i % 5 == 0:
            result_list.append("Buzz")
        else:
            result_list.append(i)

    return result_list


# if __name__ == "__main__":
# print(one_to_n_fizz_buzz(1, 15))

# Exercício 2: Em alguns lugares é comum lembrar um número do telefone
# associando seus dígitos a letras. Dessa maneira, a expressão MY LOVE
# significa 69 5683. Claro que existem alguns problemas, uma vez que
# alguns números de telefone não formam uma palavra ou uma frase, e os
# dígitos 1 e 0 não estão associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta por
# letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.

# import re


def convert_phrase_to_number(phrase):
    characteres = list(phrase)
    result_list = []

    for i in characteres:
        if re.match(r"[a-c]", i, re.IGNORECASE):
            result_list.append("2")
        elif re.match(r"[d-f]", i, re.IGNORECASE):
            result_list.append("3")
        elif re.match(r"[g-i]", i, re.IGNORECASE):
            result_list.append("4")
        elif re.match(r"[j-l]", i, re.IGNORECASE):
            result_list.append("5")
        elif re.match(r"[m-o]", i, re.IGNORECASE):
            result_list.append("6")
        elif re.match(r"[p-s]", i, re.IGNORECASE):
            result_list.append("7")
        elif re.match(r"[t-v]", i, re.IGNORECASE):
            result_list.append("8")
        elif re.match(r"[w-z]", i, re.IGNORECASE):
            result_list.append("9")
        elif i == "-":
            result_list.append("-")
        else:
            raise Exception("Apenas '-' e os caracteres a-z são aceitos")

    return "".join(result_list)


# if __name__ == "__main__":
#     print(convert_phrase_to_number("oi-me-ligam"))


# 🚀 Exercício 3 Faça uma função que valide um e-mail, lançando
# uma exceção quando o valor for inválido. Endereços de e-mail
# válidos devem seguir as seguintes regras:

import re


def validate_email(email):

    regex = re.compile(
        r"([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+"
    )

    if not re.match(regex, email):
        raise Exception("E-mail inválido")

    print("Deu bom")


if __name__ == "__main__":
    validate_email("fafhcavalcanti@gmail.com")
