const express = require('express');
const ProductController = require('./controllers/productsController');
const UserController = require('./controllers/userController');
const SaleoffController = require('./controllers/saleoffController');

const app = express();
const port = 3001;

app.use(express.json());
app.use('/products', ProductController);
app.use('/users', UserController);
app.use('/saleoffs', SaleoffController);

app.listen(port, () => console.log(`App listening on port ${port}`));
