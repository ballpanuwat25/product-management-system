const products = require('../models/db');

const getProducts = (req, res) => {
    res.send(products);
}

module.exports = getProducts;