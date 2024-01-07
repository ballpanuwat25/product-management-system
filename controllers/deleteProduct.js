import products from '../models/db.js';

export const deleteProduct = (req, res) => {
    const { id } = req.params;
    const product = products.find((product) => product.id == id);
    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send(`Product with id ${id} has been deleted`);
}