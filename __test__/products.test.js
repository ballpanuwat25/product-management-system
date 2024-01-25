const express = require('express');
const request = require('supertest');
const router = require('../routes/products.route');
const products = require('../models/db');

const app = express();
app.use(express.json());
app.use(router);

describe('Product API Tests', () => {
  it('should add a new product', async () => {
    const newProduct = {
      id: 3,
      name: 'New Product',
      type: 'New Type',
      price: 1500,
      quantity: 15,
    };

    const response = await request(app).post('/products').send(newProduct);

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Product added successfully');
  });

  it('should edit an existing product', async () => {
    const updatedProduct = {
      name: 'Updated Product',
      price: 1200,
    };

    const response = await request(app)
      .patch('/products/1')
      .send(updatedProduct);

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Product with id 1 has been edited');
  });

  it('should delete an existing product', async () => {
    const response = await request(app).delete('/products/2');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Product with id 2 has been deleted');
  });

  it('should get all products', async () => {
    const response = await request(app).get('/products');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(products);
  });

  it('should get a product by ID', async () => {
    const response = await request(app).get('/products/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(products[0]);
  });
});
