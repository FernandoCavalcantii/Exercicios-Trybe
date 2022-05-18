/* index.js */
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 30.0, waitTime: 25 },
  { id: 5, name: "Frango a Bolonhesa", price: 50.0, waitTime: 30 },
];

app.get("/recipes", function (req, res) {
  res.json(recipes);
});

// Observação: Quando houver rotas com um mesmo radical e uma delas utilizar parâmetro de rota, as rotas mais específicas sempre devem ser definidas antes. Isso porque, ao resolver uma rota, o Express verifica rota por rota qual corresponde à URL que chegou. Se colocarmos a rota /recipes/search depois da rota /recipes/:id , o Express vai entender a palavra search como um id e vai chamar a callback da rota /recipes/:id . Tenha atenção a esse detalhe ao utilizar rotas similares na definição da sua API.

app.get("/recipes/search", function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) =>
      r.name.includes(name) &&
      r.price <= parseInt(maxPrice) &&
      r.price >= parseInt(minPrice)
  );
  res.status(200).json(filteredRecipes);
});

app.get("/recipes/:id", function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: "Recipe not found!" });
  // Atenção: Perceba que na linha com o if colocamos um return . Isso serve para indicar para o express que ele deve quebrar o fluxo e não executar a linha res.status(200).json(recipe); . Caso você não coloque o return , sua requisição vai funcionar mas você verá, no log do seu terminal, um erro como este abaixo

  // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

  //   Esse erro significa que o Express entendeu que você está tentando retornar duas respostas para o cliente:
  // uma com código HTTP 404, para quando a receita não foi encontrada;
  // outra com código HTTP 200, com a receita encontrada.
  res.status(200).json(recipe);
});

app.put("/recipes/:id", function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
  // EXP HTTPie
  // http PUT :3001/recipes/2 name='Macarrão ao alho e óleo'
  // EXP FRONT
  //   fetch(`http://localhost:3001/recipes/2`, {
  //   method: 'PUT',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     name: 'Macarrão ao alho e óleo',
  //     price: 40
  //   })
  // });
});

app.delete("/recipes/:id", function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();

  // EXP HTTPIE
  // http DELETE :3001/recipes/3

  // EXP FRONT
  //   fetch(`http://localhost:3001/recipes/4`, {
  //   method: 'DELETE',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   }
  // });
});

app.post("/recipes", function (req, res) {
  const { id, name, price } = req.query;
  recipes.push({ id, name, price });
  res.status(201).json({ message: "Recipe created successfully!" });

  // EXP DE REQUISIÇÃO PELO HTTPIE
  // http POST :3001/recipes id:=4 name='Macarrão com Frango' price:=30

  // EXP DE REQUISIÇÃO NO FRONT QUE ENVIA HEADERS E BODY
  //   fetch(`http://localhost:3001/recipes/`, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     id: 4,
  //     name: 'Macarrão com Frango',
  //     price: 30
  //   })
  // });

  // ***Como no HTTP só é possível trafegar texto, é necessário transformar o objeto JavaScript que queremos enviar para uma string JSON. Por isso que do lado do nosso back-end precisamos utilizar o bodyParser para transformar as informações que foram trafegadas como string JSON, de volta para um objeto JavaScript.***
});

app.get("/validateToken", function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16)
    return res.status(401).json({ message: "Invalid Token!" });

  res.status(200).json({ message: "Valid Token!" });

  // VIDE POSTMAN
  // http :3001/validateToken Authorization:S6xEzQUTypw4aj5A
});

app.all("*", function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
  //  Para retornar uma resposta mais amigável ao fazer requisição para rota não mapeada, podemos usar o método app.all
  // app.all serve para mapear uma rota que pode ser de qualquer verbo HTTP
  // * é um wildcard , ou seja um expressão coringa que indica que independente da rota que chegar aqui ele vai capturar e executar a callback
  // ****app.all('*') deve ser sempre a última definição de rota da nossa API. Caso o contrário algumas requisições podem cair antes neste callback e não executar o callback para a rota específica.****
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
