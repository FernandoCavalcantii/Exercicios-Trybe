require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const loginAuth = require('./middlewares/loginAuth');
const authToken = require('./middlewares/authToken');
const adminValidation = require('./middlewares/adminValidation');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.post('/login', rescue(loginAuth), rescue(controllers.login));
app.get('/users/me', rescue(authToken), rescue(controllers.getUser));
app.get(
  '/top-secret',
  rescue(authToken),
  rescue(adminValidation),
  rescue(controllers.topSecret)
);

app.use(middlewares.errorMiddleware);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
