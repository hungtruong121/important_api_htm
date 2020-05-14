const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./models');
const middleware = require('./middleware');
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
    id = data.[i].id.toString();
    if (cart.hasOwnProperty(id)) {
      data.products[i].qty = cart[id]
      products.push(data.products[i]);
    }
  }
  return res.json(products);
});
app.post('/api/auth', (req,res) => { //signs in user
  let user = data.users.filter((user) => {
    return user.name == req.body.name && user.password == req.body.password;
  });
  if (user.length){
    // create a token using user name and password vaild for 2 hours
    let token_payload = {name: user[0].name, password: user[0].password};
    let token = jwt.sign(token_payload, "jwt_secret_password", { expiresIn: '2h' });
    let response = { message: 'Token Created, Authentication Successful!', 
                     token: token };
      // return the information including token as JSON
      return res.status(200).json(response);
  } else {
      return res.status("401").json("Authentication failed. admin not found.");
  }
});
const PORT = 5000;
app.listen(PORT);
console.log('api runnging on port ' + PORT + ': ');