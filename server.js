var express = require("express");
var bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require("mongoose");
var config = require('./config/config');
const Catogory  = require('./models/catogories');
const Dishes  = require('./models/dishes');
const Product = require('./models/products');

mongoose.connect(config.dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "#MongoDB - connection error: "));


//set up sessions
app.use(
  session({
    secret: "mySecretString",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 2 }, //2 days in millisecond
    store: new MongoStore({ mongooseConnection: db, ttl: 2 * 24 * 60 * 60 }),
  })
);

// CART APIs
//save session api
app.get("/cart",async (req, res) => {
var {select} = req.query;
  var cart = select.split(',');
  req.session.cart = cart;
  const products = await Product.find({_id:{'$in':cart}});
  const id_catogory = [];
  products.map(value => {
    if(value.id_catogory != ''){
      id_catogory.push(value.id_catogory);
    }
  });
  const catogories = await Catogory.find({_id:{'$in':id_catogory}}).lean();
  let names  = "";
  const catogoryNames = await catogories.map(c =>{
    names = "" + c.name;
    return c.name;
  });
  let dishes = await Dishes.find();
  let dishesSelect  =[];
  const capitalize = (s)=>{
    return s && s[0].toUpperCase() + s.slice(1);
}
  dishes.map(d =>{
    let dNames=[];
    dNames = d.main_ingredient.split(' ');
    dNames.map(n=>{
      if(catogoryNames.includes(capitalize(n))){
        dishesSelect.push(d);
        return;
      }
    })
  })
  console.log(dishesSelect);
  return res.json(dishesSelect);

});
//Nutritons APIs
var Item = require("./models/products");

//APIs
app.get("/", (req, res) => {
  res.send("hello from server!");
});



app.post("/cart-nutritions", (req, res) => {
  var nutritions = req.body;
  Item.insertMany(nutritions, (err, docs) => {
    console.log(nutritions);
    if (err) {
      throw err;
    }
    res.json(docs);
  });
});

app.get("/cart-nutritions", (req, res) => {
  Item.find(function (err, docs) {
    if (err) {
      throw err;
    }
    console.log("get success");
    res.json(docs);
  });
});

app.delete("/cart-nutritions/:_id", (req, res) => {
  var condition = { _id: req.params._id };
  Item.remove(condition, (err, docs) => {
    if (err) {
      console.log("err");
    }
    console.log("delete success");
    res.json(docs);
  });
});

app.put("/cart-nutritions/:_id", (req, res) => {
  var nutritions = req.body;
  var condition = { _id: req.params._id };

  // if the field doesn't exist $set will seta new field
  var update = {
    $set: {
      name: nutritions.name,
      kcal: book.kcal,
    },
  };

  var options = { new: true };

  Item.findOneAndUpdate(condition, update, options, (err, docs) => {
    if (err) {
      throw err;
    }
    console.log("update success");
    res.json(docs);
  });
});

//get session api
app.get("/cart", (req, res) => {
    if (typeof req.session.cart !== "undefined") {
      res.json(req.session.cart);
    }
  });

  app.listen(3000, () => {
    console.log("App listening on port 3000");
  });

  //funtion find meals
var envents = require('events');

var eventEmiter 