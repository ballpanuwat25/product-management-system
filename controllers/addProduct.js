const products = require('../models/db');

const addProduct = (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.send(`Product added successfully`);
}

module.exports = addProduct;