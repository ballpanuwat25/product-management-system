
# Product Management System

## Overview

Welcome to the Product Management System repository! This system allows users to manage a list of products, providing functionalities to add new products, view existing products, edit product details, and delete products. The product information includes the product name, type, price, and stock quantity.

The data is stored in arrays in the server's RAM, utilizing objects to represent information for each product. Additionally, the system exposes API endpoints for adding, viewing, editing, and deleting products.

## Getting Started

To use the Product Management System, follow these steps:

1.  Clone the repository to your local machine:
	```
    git clone https://github.com/ballpanuwat25/product-management-system.git
    ```
2.  Navigate to the project directory:
	```
    cd product-management-system
    ```
3.  Install any necessary dependencies:
	```
    npm install
    ```
4.  Start the server:
	```
    npm start
    ```
    This will launch the server, and you can access the product management system via the specified port (default: http://localhost:3000).
    

## Features

### 1. Add New Products

Users can add new products by providing the product name, type, price, and stock quantity. The system will store this information in the server's RAM.

### 2. View Products

Users can view a list of all products, including their details such as name, type, price, and stock quantity.

### 3. Edit Existing Products

Users can edit existing products by modifying the product details. The changes will be reflected in the server's RAM.

### 4. Delete Existing Products

Users have the option to delete existing products from the system. This action will remove the product from the server's RAM.

## API Endpoints

The Product Management System provides the following API endpoints:

-   `POST /products`: Add a new product.
-   `GET /products`: View all products.
-   `GET /products/:id`: View details of a specific product.
-   `PATCH /products/:id`: Edit an existing product.
-   `DELETE /products/:id`: Delete an existing product.

Make sure to include the necessary data in the request body for adding and editing products.

## Unit Testing

[Jest](https://jestjs.io/) is used for unit testing in this project. Unit tests ensure the reliability and correctness of the implemented functionalities. You can run the tests using the following command:
```
npm test
```

## Technologies Used

- Node.js
- Express.js
- Jest

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code.
