from abc import ABC, abstractmethod


class Alexa:
    def __init__(self):
        self.__rotinas = []

    def __repr__(self):
        return "Alexa"

    def adicionar_rotina(self, rotina):
        self.__rotinas.append(rotina)

    def remover_rotina(self, rotina_a_ser_excluido):
        for rotina in self.__rotinas:
            if isinstance(rotina, rotina_a_ser_excluido):
                self.__rotinas.remove(rotina)

    def acionar_rotinas(self):
        for rotina in self.__rotinas:
            rotina.acionar()


# Interface Observer
class Rotina(ABC):
    @abstractmethod
    def acionar(self):
        pass


# Observador
class AcenderLuzes(Rotina):
    def __init__(self, assistente_virtual: Alexa):
        self.__assistente_virtual = assistente_virtual
        self.__assistente_virtual.adicionar_rotina(self)

    def acionar_rotina(self):
        print(f"Acendendo as luzes - By {self.__assistente_virtual.__repr__}")


if __name__ == "__main__":
    # seguidores_mensagem = ["Carlos", "Claudia", "Marcia", "Rodolfo"]
    # seguidores_push_notification = ["Carlos"]
    # seguidores_email = ["Claudia", "Marcia"]

    # meuPerfil = Perfil()
    # NotificadorMensagem(meuPerfil, seguidores_mensagem)
    # NotificadorPushNotification(meuPerfil, seguidores_push_notification)
    # NotificadorEmail(meuPerfil, seguidores_email)

    # meuPerfil.adicionar_post("Olá universo da programação!")
    # meuPerfil.mostrar_sistemas()
    # meuPerfil.remover_sistema_de_notificacao(NotificadorEmail)
    # meuPerfil.mostrar_sistemas()
