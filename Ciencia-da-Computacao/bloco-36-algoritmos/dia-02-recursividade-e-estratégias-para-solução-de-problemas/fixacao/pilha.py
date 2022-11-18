def saudacao():
    print("Oi")


def despedida():
    print("Tchau")


def init():
    print("Inicio")
    saudacao()
    print("Fim")
    despedida()


# init()

# Número passado por parâmetro à função: 4

# Execução: 4 + 3 + 2 + 1

# Resultado: 10


# def soma_fatorial(n):
#     if n == 1:
#         print("Fim")
#         return 1
#     else:
#         return n + soma_fatorial(n - 1)


# print(soma_fatorial(5))

for i in range(1, 10):
    print(i)
