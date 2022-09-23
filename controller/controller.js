const path = require('path');
const sequelize = require('sequelize');

const CartItems = require('../model/product');

exports.getProducts = (req, res, next) => {
    CartItems.findAll()
    .then(result => {
        return res.json(result);
    })
    .catch(err => console.log(err));
};

exports.getAddToCart = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'view', 'shop.html'));
    //res.sendFile(path.join(__dirname, '..', 'view', 'style.css'));
};

exports.postAddToCart = async (req, res, next) => {
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;

    const cartItems = await CartItems.create( {
        title: title,
        imgUrl: imgUrl,
        price: price
    });
    res.json(cartItems);
};