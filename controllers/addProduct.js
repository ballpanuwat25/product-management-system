import products from '../models/db.js';

export const addProduct = (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.send(`Product added successfully`);
}