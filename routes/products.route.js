const express = require('express');
const addProduct = require('../controllers/addProduct');
const editProduct = require('../controllers/editProduct');
const deleteProduct = require('../controllers/deleteProduct');

const getProducts = require('../controllers/getProducts');
const getProductById = require('../controllers/getProductById');

const router = express.Router();

router.post('/products', addProduct);
router.patch('/products/:id', editProduct);
router.delete('/products/:id', deleteProduct);

router.get('/products', getProducts);
router.get('/products/:id', getProductById);

module.exports = router;