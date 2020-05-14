const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('Cart', CartSchema);