from two_pointers_node import DoubleNode


class DoublyLinkedList:
    def __init__(self) -> None:
        self.head_value = None
        self.tail_value = None
        self.length = 0

    def __str__(self) -> str:
        return f"Length={self.length}, head_value={self.head_value}"

    def __len__(self):
        return self.length

    def insert_first(self, value):
        first_value = DoubleNode(value)
        second_value = self.head_value

        if second_value:
            second_value.previous = first_value

        first_value.next = second_value

        self.head_value = first_value
        last_value = self.head_value

        while last_value.next:
            last_value = last_value.next

        self.tail_value = last_value
        self.length += 1

    def insert_last(self, value):
        last_value = DoubleNode(value)
        previous_value = self.tail_value

        if previous_value is None:
            return self.insert_first(value)

        previous_value.next = last_value
        last_value.previous = previous_value

        self.tail_value = last_value
        self.length += 1

    def insert_at(self, index, value):
        inserted_value = DoubleNode(value)

        if self.length == 0:
            self.insert_first(value)

        if index >= self.length:
            self.insert_last(value)

        mid = self.length // 2

        if index < mid:
            while index >= 0:
                current_value = self.head_value.next
                index -= 1

        if index >= mid:
            iterations = (self.length - 1) - index
            while iterations >= 0:
                current_value = self.tail_value.previous
                iterations -= 1

        pushed_value = current_value.next
        inserted_value.next = pushed_value
        inserted_value.previous = current_value
        current_value.next = inserted_value
        pushed_value.previous = inserted_value

        self.length += 1

    def remove_first(self):
        if self.head_value is None:
            return self.head_value

        removed_value = self.head_value
        self.head_value = self.head_value.next
        self.head_value.previous = None
        self.length -= 1

        return removed_value.value

    def remove_last(self):
        removed_value = self.tail_value
        if removed_value:
            self.tail_value = removed_value.previous
            self.tail_value.next = None
            self.length -= 1

            return removed_value.value
        return removed_value

    def remove_at(self, index):
        if self.length == 0:
            return None

        if index >= self.length:
            raise IndexError("Sequence index out of range.")

        if index == 0:
            return self.remove_first()

        if index == self.length - 1:
            return self.remove_last()

        mid = self.length // 2

        if index < mid:
            current_value = self.head_value
            while index >= 1:
                current_value = current_value.next
                index -= 1

        if index >= mid:
            current_value = self.tail_value
            iterations = (self.length - 1) - index
            while iterations >= 1:
                current_value = current_value.previous
                iterations -= 1

        previous_value = current_value.previous
        next_value = current_value.next
        previous_value.next = next_value
        next_value.previous = previous_value

        self.length -= 1

        return current_value.value

    def get_all(self):
        current = self.head_value
        all_values = []
        length = self.length

        for i in range(length):
            all_values.append(current.value)
            current = current.next

        return all_values

    def get_element_at(self, index):
        if len(self) == 0:
            return None

        if index == 0:
            return self.get_head()

        if index == len(self) - 1:
            return self.get_tail()

        mid = self.length // 2

        if index < mid:
            current_value = self.head_value
            while index >= 1:
                current_value = current_value.next
                index -= 1

        if index >= mid:
            current_value = self.tail_value
            iterations = (self.length - 1) - index
            while iterations >= 1:
                current_value = current_value.previous
                iterations -= 1

        return current_value.value

    def get_head(self):
        if self.head_value:
            return self.head_value.value
        return self.head_value

    def get_tail(self):
        if self.tail_value:
            return self.tail_value.value
        return self.tail_value

    def clear(self):
        self.head_value = None
        self.tail_value = None
        self.length = 0


if __name__ == "__main__":
    double_linked_list = DoublyLinkedList()
    double_linked_list.insert_last(2)
    double_linked_list.insert_last(3)
    double_linked_list.insert_first(1)
    double_linked_list.insert_last(6)
    double_linked_list.insert_at(3, 4)
    double_linked_list.insert_at(4, 5)
    print(double_linked_list)
    print(double_linked_list.remove_at(5))
    # print(double_linked_list.remove_at(1))
    # print(double_linked_list)
    # print(double_linked_list.remove_at(3))
    # print(double_linked_list)
    # print(double_linked_list.get_element_at(5))
    # print(double_linked_list.get_element_at(3))
    # print(double_linked_list.get_all())
