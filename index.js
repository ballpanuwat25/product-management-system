import express from 'express';
const app = express();
const port = 3000;

import { addProduct } from './controllers/addProduct.js';
import { editProduct } from './controllers/editProduct.js';
import { deleteProduct } from './controllers/deleteProduct.js';

import { getProducts } from './controllers/getProducts.js';
import { getProductById } from './controllers/getProductById.js';

app.use(express.json());

app.post('/products/add', addProduct);
app.patch('/products/:id', editProduct);
app.delete('/products/:id', deleteProduct);

app.get('/products', getProducts);
app.get('/products/:id', getProductById);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})