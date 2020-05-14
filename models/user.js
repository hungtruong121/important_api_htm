const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    id_statistic: String,
});

module.exports = mongoose.model('User', UserSchema);