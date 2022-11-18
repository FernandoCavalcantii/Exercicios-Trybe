from cgi import test
from datetime import datetime
from pydoc_data.topics import topics
import requests
import time
from parsel import Selector
import re


def fetch(url):
    """Seu código deve vir aqui"""
    headers = {"user-agent": "Fake user-agent"}
    try:
        time.sleep(1)
        response = requests.get(url, headers=headers, timeout=3)
        response.raise_for_status()
        return response.text
    except requests.HTTPError:
        return None
    except requests.ReadTimeout:
        return None


teste = fetch("https://blog.betrybe.com/")


def scrape_novidades(html_content):
    """Seu código deve vir aqui"""
    selector = Selector(text=html_content)
    url_list = []
    for news in selector.css(".cs-overlay"):
        link = news.css("a")
        # print("link", news)
        url_list.append(link)
    return url_list


def scrape_next_page_link(html_content):
    """Seu código deve vir aqui"""
    selector = Selector(text=html_content)
    next_page_url = selector.css(".next::attr(href)").get()
    if next_page_url:
        return next_page_url
    else:
        return None


# print(scrape_next_page_link(teste))

teste2 = fetch(
    # "https://blog.betrybe.com/noticias/axie-infinity-reabre-transacoes-apos-perder-bilhoes/"
    # "https://blog.betrybe.com/tecnologia/arquivo-bin/"
    "https://blog.betrybe.com/carreira/frases-de-lideranca/"
)


def scrape_noticia_dict_generator(
    url, title, timestamp, writer, comments_count, summary, tags, category
):
    result = {}

    result["category"] = category
    if comments_count is not None:
        result["comments_count"] = int(
            re.search(r"\d+", comments_count).group()
        )
    else:
        result["comments_count"] = 0
    result["summary"] = summary
    result["tags"] = tags
    if timestamp is not None:
        result["timestamp"] = timestamp[:10]
    result["title"] = title
    result["url"] = url
    result["writer"] = writer

    return result


# Requisito 4
def scrape_noticia(html_content):
    """Seu código deve vir aqui"""
    selector = Selector(text=html_content)
    url = selector.css('link[rel="canonical"]::attr(href)').get()
    title = selector.css(".entry-title::text").get()
    timestamp = selector.css(".meta-date::text").get()
    writer = selector.css(".author a::text").get()
    comments_count = selector.css(".post-comments h5::text").get()
    summary = "".join(
        selector.css("div.entry-content > p:first-of-type *::text").getall()
    ).strip()

    tags = selector.css(".post-tags ul li a::text").getall()
    category = selector.css(".label::text").get()
    # print(url)
    return scrape_noticia_dict_generator(
        url, title, timestamp, writer, comments_count, summary, tags, category
    )


# print(scrape_noticia(teste2))


def get_tech_news(amount):
    """Seu código deve vir aqui"""
    html_content = fetch("https://blog.betrybe.com/")
    page_news_raw_url_list = scrape_novidades(html_content)
    next_url_link = scrape_next_page_link(html_content)

    page_news_url_list = []

    while len(page_news_url_list) < amount:
        for page_news_url in page_news_raw_url_list:
            print(page_news_url)
            regex = r'(?<=")([^"]+)'
            formated_url = re.search(regex, page_news_url[0].get()).group(0)
            page_news_url_list.append(formated_url)
            if len(page_news_url_list) == amount:
                break

        if len(page_news_url_list) < amount:
            html_content = fetch(next_url_link)
            page_news_raw_url_list = scrape_novidades(html_content)
            next_url_link = scrape_next_page_link(html_content)

    news = []

    for url in page_news_url_list:
        if len(news) < amount:
            html_content = fetch(url)
            news_dict = scrape_noticia(html_content)
            news.append(news_dict)

    # create_news(news)

    # print(news)


# get_tech_news(13)

from pymongo import MongoClient

# from decouple import config

# import copy

# DB_HOST = config("DB_HOST", default="localhost")
# DB_PORT = config("DB_PORT", default="27017")

client = MongoClient()
db = client.tech_news


def search_by_title(title):
    """Seu código deve vir aqui"""
    news = db.news.find({"title": {"$regex": "(?i)" + title}})

    if news == None:
        return []

    result = []

    for single_news in news:
        result.append((single_news["title"], single_news["url"]))

    return result


# print(search_by_title("BACANA"))


def search_by_date(date):
    """Seu código deve vir aqui"""
    try:
        converted_date = datetime.strptime(date, "%Y-%m-%d").strftime(
            "%d/%m/%Y"
        )
        news = db.news.find({"timestamp": {"$regex": converted_date}})

        if news == None:
            return []

        result = []

        for single_news in news:
            result.append((single_news["title"], single_news["url"]))

        print(result)
        return result
    except ValueError:
        return "Data inválida"


# search_by_date("2021-04-04")


def search_by_tag(tag):
    """Seu código deve vir aqui"""
    try:
        news = db.news.find({"tags": {"$regex": r"(?i)" + tag}})

        if news == None:
            return []

        result = []

        for single_news in news:
            result.append((single_news["title"], single_news["url"]))

        return result
    except ValueError:
        return "Data inválida"


search_by_tag("esportes")
