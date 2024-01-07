import products from '../models/db.js';

export const getProducts = (req, res) => {
    res.send(products);
}