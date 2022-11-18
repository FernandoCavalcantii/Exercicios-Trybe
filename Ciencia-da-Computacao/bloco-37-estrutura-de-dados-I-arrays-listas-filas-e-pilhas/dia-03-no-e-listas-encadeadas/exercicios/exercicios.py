# Exercício 3: remover duplicatas de uma LinkedList, atividade extraída e adaptada do LeetCode. Nesta atividade será necessário implementar um algoritmo que receba uma LinkedList como argumento e retorne uma nova lista sem elementos duplicados. Esta função deve respeitar a complexidade O(n).

from doubly_linked_list import DoublyLinkedList

lst = DoublyLinkedList()
lst.insert_first(1)
lst.insert_last(2)
lst.insert_last(4)
lst.insert_last(4)
lst.insert_last(4)
lst.insert_last(2)

print(lst)


def remove_duplicates(linked_list: DoublyLinkedList):
    my_list = linked_list.get_all()
    no_duplicates = list(set(my_list))
    length = len(no_duplicates)

    linked_list.clear()

    for index in range(length - 1, -1, -1):
        value = no_duplicates[index]
        linked_list.insert_first(value)

    return linked_list


if __name__ == "__main__":
    no_duplicates = remove_duplicates(lst)
    print(no_duplicates)
