
# eCommerce API

I've designed an RESTful CRUD (Create, Retrieve, Update, Delete) API with Node.js, Express and MongoDB for an ecommerce admin to manage product inventory.

## Dependecies

```bash
NodeJS
```

```bash
Express
```

```bash
Mongodb
```
## How to setup the project on local system

To setup this project, run the following commands on your terminal

 1. Clone the project

```bash
 https://github.com/HarshitSingh45/eCommerce-API.git
```

2. Change directory to Ecomerce-API 

```bash
cd eCommerce_API/
```

3. Install all depedencies

```bash
npm i --save
```

4. Run the project

```bash
npm start
```

5. using POSTMAN you can use these urls to test API

```bash
http://localhost:8000/
```





## Features

- Admin can view all products available in inventory using this url

```
http://localhost:8000/products
```
- Admin can create a new product

```
http://localhost:8000/products/create
```
- Admin can delete any particular product

```
http://localhost:8000/products/:id
```
- Admin can update any particular product quantity

```
http://localhost:8000/products/:id/update_quantity/?number=10
```


## Directory Structure

```
.
├── config
│   └── mongoose.js
├── controllers
│   ├── homeController.js
│   └── productsController.js
├── index.js
├── models
│   └── products.js
├── package-lock.json
├── package.json
└── routes
    ├── index.js
    └── products.js

```

## Author

- [@HarshitSingh45](https://www.github.com/HarshitSingh45)

