# Exercício 1: Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu conteúdo de forma legível.


# import requests

# BASE_URL = "https://httpbin.org/encoding/utf8"

# response = requests.get(BASE_URL)

# if __name__ == "__main__":
#     print(response.text)


# _______________________________________ #

# Exercício 2: Faça uma requisição ao recurso usuários da API do Github (https://api.github.com/users), exibindo o username e url de todos os usuários retornados.

# Minha resposta está ruim, ver a da Trybe abaixo.

# import requests

# BASE_URL = "https://api.github.com/users"

# content = requests.get(BASE_URL).text


# def convert_to_list(string):
# li = list(string.split(","))
# result = []
# for str in li:
#     print(str)
#     formated_string_a = str.replace("]", "")
#     formated_string_b = formated_string_a.replace("[", "")
#     formated_string_c = formated_string_b.replace("{", "")
#     formated_string_d = formated_string_c.replace("}", "")
#     result.append(formated_string_d)
# return result


# if __name__ == "__main__":
# my_list = convert_to_list(content)
#     for str in my_list:
#         if str.startswith('"login"'):
#             username = str.split(":", 1)[1]
#             print(username)
#         if str.startswith('"url"'):
#             url = str.split(":", 1)[1]


# ____________ Resp Trybe ______________ #

# import requests


# response = requests.get("https://api.github.com/users")
# users = response.json()
# for user in users:
#     print(f"{user['login']} {user['url']}")


# _______________________________________ #

# Exercício 3: Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como o navegador, para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers e verifique se foi bem sucedida.

# import requests

# headers = {"User-agent": "Mozilla", "Accept": "text/html"}

# response = requests.get(
#     "https://scrapethissite.com/pages/advanced/?gotcha=headers",
#     headers=headers,
# )

# print(response)
# assert "bot detected" not in response.text


# _______________________________________ #

# 🚀 Exercício 4: Baseando-se em uma página contendo detalhes sobre um livro (http://books.toscrape.com/catalogue/the-grand-design_405/index.html), faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.


# import requests
# import re
# from parsel import Selector

# content = requests.get(
#     "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
# )

# selector = Selector(text=content.text)

# title = selector.css(".product_main h1::text").get()
# # price = selector.css(".price_color::text").get()[2:]
# price = selector.css(".product_main > .price_color::text").re_first(
#     r"\d*\.\d{2}"
# )
# description = selector.css(".sub-header + p::text").get()
# suffix = "...more"
# description = description[: -len(suffix)]
# availability = selector.css(".product_main .availability::text").re_first("\d")
# # raw_availability = selector.css(".product_main p::text").getall()[2]
# # availability = re.search(r"\b\d+\b", raw_availability).group()
# # print(f"{title} \n {price} \n {description}\n {availability}")
# print(title, price, description, availability, sep="\n")


# _______________________________________ #

# 🚀 Exercício 5: Modifique o exercício anterior para retornar também quantos livros estão disponíveis, apresentando como último campo no retorno.


# _______________________________________ #

# Exercício 6: Escreva um programa que se conecte ao banco de dados library e liste os livros da coleção books para uma determinada categoria recebida por uma pessoa usuária. Somente o título dos livros deve ser exibido.

# Ver a resp seguinte abaixo

# import requests
# import json

# # from parsel import Selector


# def print_books_in_category(category):
#     with open("books.json") as file:
#         books = json.load(file)
#         for book in books:
#             if category in book["categories"]:
#                 print(book["title"])


# print_books_in_category("Open Source")

# Resp correta:

# from pymongo import MongoClient

# category = input("Escolha uma categoria: ")
# with MongoClient() as client:
#     db = client.library
#     for book in db.books.find({"categories": category}, projection=["title"]):
#         print(book["title"])
