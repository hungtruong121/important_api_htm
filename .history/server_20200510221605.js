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


//get session api
app.get("/cart", (req, res) => {
    if (typeof req.session.cart !== "undefined") {
      res.json(req.session.cart);
    }
  });

  app.listen(5000, () => {
    console.log("App listening on port 5000");
  });