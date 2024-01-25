const products = require('../models/db');

const editProduct = (req, res) => {
    const { id } = req.params;
    const { name, type, price, quantity } = req.body;
    const product = products.find((product) => product.id == id);
    if (name) {
        product.name = name;
    }
    if (type) {
        product.type = type;
    }
    if (price) {
        product.price = price;
    }
    if (quantity) {
        product.quantity = quantity;
    }
    res.send(`Product with id ${id} has been edited`);
}

module.exports = editProduct;