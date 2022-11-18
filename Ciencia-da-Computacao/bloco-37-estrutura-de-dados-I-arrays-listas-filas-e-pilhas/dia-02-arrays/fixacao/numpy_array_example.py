# import numpy as np

# # define um array vazio de inteiros
# myarray = np.array([], dtype=int)

# # podemos adicionar alguns valores
# myarray = np.insert(myarray, 0, 5)  # na posição 0 o valor 5
# myarray = np.insert(myarray, 1, 3)
# myarray = np.insert(myarray, 2, 5)
# print("Após adicionar alguns valores: ", myarray)

# # adicionar em uma posição intermediária
# myarray = np.insert(myarray, 1, 4)
# print("Após inserção em índice intermediário: ", myarray)


# # remover um valor através do índice
# myarray = np.delete(myarray, 0)
# print("Após remover um valor:", myarray)


my_list = [8, 1, 5, 2, 6]


def pontuation(lst):
    highest_pontuation = 0
    for index, num in enumerate(lst):
        for i, el in enumerate(lst):
            if index != i:
                if index > i:
                    pontuation = (num + el) - (index - i)
                    if highest_pontuation < pontuation:
                        highest_pontuation = pontuation
                else:
                    pontuation = (num + el) - (i - index)
                    if highest_pontuation < pontuation:
                        highest_pontuation = pontuation
    return highest_pontuation


result = pontuation(my_list)
print(result)
