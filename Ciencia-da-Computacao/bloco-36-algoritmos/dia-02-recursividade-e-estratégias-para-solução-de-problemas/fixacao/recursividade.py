def printer(n):
    if n >= 1:
        print(n)
        printer(n - 1)


# printer(10)


def factorial(n):
    if n == 1:  # caso base
        return 1
    else:
        return n * factorial(n - 1)  # caso recursivo


print(factorial(5))
