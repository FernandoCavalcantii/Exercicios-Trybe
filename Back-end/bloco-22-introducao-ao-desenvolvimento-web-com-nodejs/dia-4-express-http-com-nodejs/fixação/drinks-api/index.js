const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.get("/drinks", (req, res) => {
  const sortedDrinks = drinks.sort((a, b) => a.name.localeCompare(b.name));
  res.json(sortedDrinks);
});

app.post("/drinks", (req, res) => {
  const { id, name, price } = req.query;
  drinks.push({ id, name, price });
  console.log(name);
  res.status(201).json({ message: `${name} added` });
});

app.post("/recipes", function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: "Recipe created successfully!" });
});

app.get("/drinks/search", (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.get("/drinks/:id", (req, res) => {
  const { id } = req.params;

  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: "Drink not found" });

  res.status(200).json(drink);
});

app.put("/drinks/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const editedDrink = drinks.findIndex((d) => d.id === parseInt(id));

  if (editedDrink === -1)
    return res.status(404).json({ message: "Drink not found" });

  drinks[editedDrink] = { ...drinks[editedDrink], name, price };

  res.status(204).json({ message: "Edit was sucessful" });
});

app.delete("/drinks/:id", (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

  if (drinkIndex === -1) res.status(404).json({ message: "Drink not found" });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.all("*", function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
