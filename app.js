const express=require('express');

const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product', (req, res) => {
  res.send(`<form action="/add-product" method="POST">
          <label for="product-name">Product Name:</label>
          <input type="text" id="product-name" name="productName"><br>
          <label for="product-price">Product Price:</label>
          <input type="text" id="product-price" name="productPrice"><br>
          <button type="submit">Add Product</button> </form>`);
});


app.post('/add-product', (req, res) => {
 console.log(req.body);
  res.send('Product Added Successfully!');
});


app.listen(3000);