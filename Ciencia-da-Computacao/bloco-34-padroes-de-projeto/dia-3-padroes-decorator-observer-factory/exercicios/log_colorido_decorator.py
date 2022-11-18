ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

# print("\033[94mOlá Mundo!\033[0m")
# ou
# print(f"{VERDE}Olá Mundo!{RESET}")


class Log:
    def dispara_log(self, message):
        print(message)


class LogError:
    def __init__(self, log: Log) -> None:
        self.log = log

    def dispara_log(self, message):
        error_message = f"{VERMELHO}{message}{RESET}"
        self.log.dispara_log(error_message)


class LogWarning:
    def __init__(self, log: Log) -> None:
        self.log = log

    def dispara_log(self, message):
        error_message = f"{LARANJA}{message}{RESET}"
        self.log.dispara_log(error_message)


class LogSuccess:
    def __init__(self, log: Log) -> None:
        self.log = log

    def dispara_log(self, message):
        error_message = f"{VERDE}{message}{RESET}"
        self.log.dispara_log(error_message)


log = Log()

log_success = LogSuccess(log)
log_warning = LogWarning(log)
log_error = LogError(log)

if __name__ == "__main__":
    log_success.dispara_log("Deu bom")
    log_warning.dispara_log("Deu aviso")
    log_error.dispara_log("Deu ruim")
