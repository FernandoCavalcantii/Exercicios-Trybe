class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        if type(index) == str:
            return 0
        try:
            return self.loaded_memory[index]
        except IndexError:
            return 0

    def clean(self):
        self.loaded_memory = []


main = MainMemory()
main.load(5)
print([main.get(i) for i in range(2)])
