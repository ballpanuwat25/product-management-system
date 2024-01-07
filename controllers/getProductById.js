import products from '../models/db.js';

export const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id == id);
    res.send(product);
}