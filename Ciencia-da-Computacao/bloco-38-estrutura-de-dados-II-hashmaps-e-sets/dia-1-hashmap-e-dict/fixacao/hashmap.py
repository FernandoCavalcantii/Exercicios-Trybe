from types import SimpleNamespace


class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


# class HashMap:
#     def __init__(self):
#         self._buckets = [None for i in range(10)]

#     def get_address(self, id_num):
#         return id_num % 10

#     def insert(self, employee):
#         address = self.get_address(employee.id_num)
#         self._buckets[address] = employee

#     def get_value(self, id_num):
#         address = self.get_address(id_num)
#         return self._buckets[address].name

#     def has(self, id_num):
#         address = self.get_address(id_num)
#         return self._buckets[address] is not None

#     def update_value(self, id_num, new_name):
#         adress = self.get_address(id_num)
#         self._buckets[adress].name = new_name


# Separate Chaining
class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    def has(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return True
            return None

    def update_value(self, id_num, new_name):
        adress = self.get_address(id_num)
        for item in self._buckets[adress]:
            if item.id_num == id_num:
                item.name = new_name


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

employees_database = HashMap()

for employee in employees:
    employee_dict = {"id_num": employee[0], "name": employee[1]}
    employee_dict = SimpleNamespace(**employee_dict)
    employees_database.insert(employee_dict)

employees_database.update_value(10, "name30")
print(employees_database.get_value(10))
print(employees_database.has(23))
