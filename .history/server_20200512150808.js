var express = require("express");
var bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("")(session);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://bruce:Banvatoi7&@healthymealplanner-cgtzq.mongodb.net/healthymealplanner?retryWrites=true&w=majority", {
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
app.post("/cart", (req, res) => {
  var cart = req.body;
  console.log(cart);
  req.session.cart = cart;
  req.session.save((err) => {
    if (err) {
      throw err;
    }
    res.json(req.session.cart);
  });
});
//Nutritons APIs
var Item = require("./models/catogories.js");

//APIs
app.get("/", (req, res) => {
  res.send("hello from server!");
});



app.post("/nutritions", (req, res) => {
  var nutritions = req.body;
  Item.insertMany(nutritions, (err, docs) => {
    console.log(nutritions);
    if (err) {
      throw err;
    }
    res.json(docs);
  });
});

app.get("/nutritions", (req, res) => {
  Item.find(function (err, docs) {
    if (err) {
      throw err;
    }
    console.log("get success");
    res.json(docs);
  });
});

app.delete("/nutritions/:_id", (req, res) => {
  var condition = { _id: req.params._id };
  Item.remove(condition, (err, docs) => {
    if (err) {
      console.log("err");
    }
    console.log("delete success");
    res.json(docs);
  });
});

app.put("/nutritions/:_id", (req, res) => {
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

  