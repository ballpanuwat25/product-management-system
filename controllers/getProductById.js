const products = require('../models/db');

const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id == id);
    res.send(product);
}

module.exports = getProductById;