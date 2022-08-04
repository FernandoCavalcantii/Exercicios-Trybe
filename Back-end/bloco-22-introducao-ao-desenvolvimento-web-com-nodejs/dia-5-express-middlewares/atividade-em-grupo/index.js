const express = require('express');
const app = express();
const verifyCountry = require('./helpers/verifyCountry');
const verifyName = require('./helpers/verifyName');
const verifyUpperCaseInitial = require('./helpers/verifyUpperCaseInitial');
app.use(express.json());

const teams = [
  { id: 1, name: 'santos'}
];

app.post('/teams', verifyName, verifyCountry, verifyUpperCaseInitial, (req, res) => {
    const { name , initials , country, league } = req.body;
		teams.push({ name , initials , country, league });
		console.log('headers', req.headers);
		console.log('body', req.body);
		console.log('query', req.query);
		console.log('params', req.params);

    return res.status(200).json({ message: `You add a team: ${name}, ${initials}, ${country}` });
});

// Atividade 8

app.get('/teams', (_req, res) => {
  if(!teams) {
    return res.status(404).json(teams)
  }
  return res.status(200).json(teams);
})

// Loucutor da porta
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); 