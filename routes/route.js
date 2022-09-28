const path = require('path');

const express = require('express');

const eCommController = require('../controller/controller');

const router = express.Router();

router.get('/addToCart', eCommController.getAddToCart);

router.post('/addToCart', eCommController.postAddToCart);

router.get('/getProducts', eCommController.getProducts);

router.post('/postUpdateQty', eCommController.postUpdateQty);

router.get('/', eCommController.getProducts);


module.exports = router;

