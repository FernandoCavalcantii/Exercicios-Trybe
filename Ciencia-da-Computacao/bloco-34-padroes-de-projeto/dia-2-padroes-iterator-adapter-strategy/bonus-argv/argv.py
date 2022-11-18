import sys
from operator import add, sub

FUNCS = {"soma": add, "subtrai": sub}

try:
    _, func, n1, n2 = sys.argv
    n1, n2 = int(n1), int(n2)
    result = FUNCS[func](n1, n2)
except ValueError:
    print("argumentos incorretos de entrada")
    print("experimento python3 soma 2 2")
    file = sys.stderr
except KeyError:
    available_functions = ", ".join(FUNCS.keys())
    print(
        f"Função indisponível, tente uma das seguintes: {available_functions}"
    )
else:
    print(f"O resultado da operação é: {result}")
