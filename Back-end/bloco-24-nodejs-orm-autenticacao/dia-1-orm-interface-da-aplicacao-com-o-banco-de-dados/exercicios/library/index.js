const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const router = require('./src/routes');

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
