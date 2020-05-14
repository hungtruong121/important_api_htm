var express = require("express");
var bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
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
  req.session.cart = cart;
  req.session.save((err) => {
    if (err) {
      throw err;
    }
    res.json(req.session.cart);
  });
});
//BOOKS APIs
var Books = require("./models/books.js");

//APIs
app.get("/", (req, res) => {
  res.send("hello from server!");
});

app.get("/api/helloworld", (req, res) => {
  res.json({ sayHi: "hello from server, nice to meet you!" });
});

app.post("/books", (req, res) => {
  var books = req.body;
  Books.insertMany(books, (err, docs) => {
    console.log(books);
    if (err) {
      throw err;
    }
    res.json(docs);
  });
});

app.get("/books", (req, res) => {
  Books.find(function (err, docs) {
    if (err) {
      throw err;
    }
    console.log("get success");
    res.json(docs);
  });
});

app.delete("/books/:_id", (req, res) => {
  var condition = { _id: req.params._id };
  Books.remove(condition, (err, docs) => {
    if (err) {
      console.log("err");
    }
    console.log("delete success");
    res.json(docs);
  });
});

app.put("/books/:_id", (req, res) => {
  var book = req.body;
  var condition = { _id: req.params._id };

  // if the field doesn't exist $set will seta new field
  var update = {
    $set: {
      title: book.title,
      description: book.description,
      image: book.image,
      price: book.price,
    },
  };

  var options = { new: true };

  Books.findOneAndUpdate(condition, update, options, (err, docs) => {
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

  app.listen(5000, () => {
    console.log("App listening on port 5000");
  });