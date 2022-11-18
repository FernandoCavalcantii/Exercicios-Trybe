import pytest

from exercicios import (
    one_to_n_fizz_buzz,
    convert_phrase_to_number,
    validate_email,
)


def test_one_to_n_fizz_buzz_returns_correct_list():
    (
        "Para a entrada dos argumentos 1 e 15, deve retornar a list: "
        "[1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', "
        "11, 'Fizz', 13, 14, 'FizzBuzz']"
    )

    assert one_to_n_fizz_buzz(1, 15) == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]


def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(
        TypeError, match="'str' object cannot be interpreted as an integer"
    ):
        one_to_n_fizz_buzz("Oi", 15)


# __________________________________________________________ #


def test_convert_phrase_to_number_returns_correct_string_number():
    (
        "Para a entrada do argumento 'oi-me-ligam', "
        "o retorno é a string '64-63-54426'"
    )

    assert convert_phrase_to_number("oi-me-ligam") == "64-63-54426"


def test_convert_phrase_to_number_raises_an_exception():
    with pytest.raises(
        Exception, match="Apenas '-' e os caracteres a-z são aceitos"
    ):
        convert_phrase_to_number("oi-me-ligam-1")


# __________________________________________________________ #


def test_validate_email_raises_an_exception():
    with pytest.raises(Exception, match="E-mail inválido"):
        validate_email("fafhcavalcanti@gmail.")
