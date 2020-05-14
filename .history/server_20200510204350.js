const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./models');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.get('/api/nutrition', (req, res) => { //lists all  available products
  return res.json(data.nutritions);
});
app.post('/api/nutrition', (req, res) => { //generates the list of products in the cart
  let nutritions = [], id = null;
  let cart = JSON.parse(req.body.cart);
  if (!cart) return res.json(nutritions)
  for (var i = 0; i < data.nutritions.length; i++) {
    id = data.nutritions[i].id.toString();
    if (cart.hasOwnProperty(id)) {
      data.products[i].qty = cart[id]
      products.push(data.products[i]);
    }
  }
  return res.json(nutritions);
});

const PORT = 5000;
app.listen(PORT);
console.log('api runnging on port ' + PORT + ': ');