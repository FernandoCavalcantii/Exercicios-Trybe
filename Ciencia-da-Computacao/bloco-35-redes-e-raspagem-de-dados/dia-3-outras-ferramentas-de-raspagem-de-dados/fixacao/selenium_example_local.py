# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

# Importa a classe 'Options' do browser
from selenium.webdriver.firefox.options import Options

options = Options()
options.add_argument("--headless")
# essa options serve para que não abra o navegador executando as ações.
# outras options: https://www.selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/Firefox/Options.html

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox(
    executable_path="/home/fernando/Desktop/Developer/Exercicios-Trybe/Ciencia-da-Computacao/bloco-35-redes-e-raspagem-de-dados/dia-3-outras-ferramentas-de-raspagem-de-dados/fixacao/.venv/bin/geckodriver",
    options=options,
)


# # requisições para essa instância criada utilizando o método `get`
# response = firefox.get("https://www.python.org/")

# # Define a função que fará o scrape da URL recebida


# # pesquisa na instância aberta do navegador pela primeira ocorrência
# # da tag 'input'
# search_input = firefox.find_element(By.CLASS_NAME, "search-field")

# # escreve dentro do campo de input
# search_input.send_keys("selenium")


def scrape(url):
    firefox.get(url)
    # Itera entre os elementos com essa classe

    books = []

    for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
        # Cria dict vazio para guardar os elementos capturados
        new_item = {}

        # Cria uma chave 'title' no dict que vai receber o resultado da busca
        # O título está em uma tag anchor que está dentro de uma tag 'H3'
        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
            # get_attribute: com o Selenium, o elemento retornado depois da busca pelo atributo CSS será do tipo webdriver e não texto. É justamente para fazer essa conversão que utilizamos esse método especificando o atributo ‘innerHTML’, ‘href’ ...
        )

        # O trecho do book está em um elemento da classe 'entry-excerpt'
        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        # O link está dentro de um atributo 'href'
        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        books.append(new_item)

    return books


URL = "https://books.toscrape.com/"
firefox.get(URL)
all_books = []

# Cria uma variável com o seletor que captura o link do botão de passar para
# a próxima página
next_page_link = firefox.find_element(By.CLASS_NAME, "next").get_attribute(
    "innerHTML"
)

# Enquanto este botão de 'next' existir na página ele irá iterar
while next_page_link:

    # Usa o método extend para colocar todos os elementos de uma lista dentro
    # de outra
    all_books.extend(scrape(URL))
    try:
        url2request = (
            firefox.find_element(By.CLASS_NAME, "next")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
    except NoSuchElementException:
        print("exception handled")
        break

print(all_books)
