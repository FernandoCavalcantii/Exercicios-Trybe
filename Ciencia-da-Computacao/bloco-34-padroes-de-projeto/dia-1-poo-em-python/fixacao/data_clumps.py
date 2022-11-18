# class User:

#     def __init__(self, name, street, number, district):
#         '''Você nunca vai passar a rua sem passar também o número e o bairro!
#         '''
#         self.name = name
#         self.address_street = street
#         self.address_number = number
#         self.address_district = district

# Exemplo acima: Ocorre quando um grupo de variáveis (como o endereço de
# entrega do exemplo que veremos abaixo) é passado junto como parâmetro
# em várias partes do programa. É indicativo de que esses grupos devam
# ser transformados em suas próprias classes.


class Address:
    def __init__(self, street, number, district):
        """As informações que nunca vem separadas são uma entidade separada
        agora."""
        self.street = street
        self.number = number
        self.district = district


class User:
    def __init__(self, name, address):
        self.name = name
        self.address = address
