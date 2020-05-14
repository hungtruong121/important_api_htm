const express = require('express');
const router = express.Router();
const controller = require('../controller/cart');

router.post('/cart', controller.CheckCart);

module.exports = router;