from functools import partial


def division(a, b):
    return a // b


dez_divido_por = partial(division, 10)

print(dez_divido_por(2))
