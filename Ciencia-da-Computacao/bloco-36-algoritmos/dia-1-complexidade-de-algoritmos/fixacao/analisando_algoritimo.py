def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1

    number2 = 0
    for n1 in range(n):
        for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
        for n2 in range(n):
            for n3 in range(n):
                number3 += n1 + n2 + n3

    return number1, number2, number3


# n1, n2, n3 = calculations(100)
# print(f"{n1}, {n2}, {n3}")

# Qual é a Ordem de Complexidade dele? 🤔
# Resposta: A rigor, ela seria O(n + n² + n³).
# De olho na dica👀: Se os loops estão aninhados você os multiplica, e se estão paralelos você os soma.

my_array = []
for i in range(8):
    my_array.append(i + 1)
result = 1
for i in my_array:
    result *= i
print(result)

# Para valores grandes, dizer a maior ordem de complexidade do conjunto já basta para uma boa análise. Sendo assim, ao analisar várias estruturas de repetição em paralelo, responda somente com o valor da estrutura que tiver maior ordem de complexidade na hora de fazer a sua análise.
