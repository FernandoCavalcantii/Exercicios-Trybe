class Tv:
    def __init__(self, tamanho: int):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    @property
    def volume(self):
        return self.__volume

    # Setter
    @volume.setter
    def volume(self, volume):
        self.__volume = volume

    # def ajustar_volume(self, volume: int):
    #     if not 1 <= volume <= 99:
    #         raise ValueError("Volume deve estar entre 1 e 99")
    #     else:
    #         self.__volume = volume
    #         print(f"Volume ajustado para {volume}")

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
            print(f"Volume aumentado para {self.__volume}")
        else:
            raise ValueError("Volume máximo é 99")

    def abaixar_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
            print(f"Volume abaixado para {self.__volume}")
        else:
            raise ValueError("Volume mínimo é 0")

    def modificar_canal(self, canal: int):
        if 1 <= canal <= 99:
            self.__canal = canal
            print(f"Canal alterado para o {self.__canal}")
        else:
            raise ValueError("O canal só pode estar entre o 1 e 99")

    def ligar_desligar(self):
        if self.__ligada:
            self.__ligada = False
            print("Tv desligada")
        else:
            self.__ligada = True
            print("Tv ligada")


tv_samsung = Tv(10)

if __name__ == "__main__":
    tv_samsung.modificar_canal(101)
