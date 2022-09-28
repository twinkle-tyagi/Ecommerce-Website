const path = require('path');
const sequelize = require('sequelize');

const CartItems = require('../model/product');

const ITEM_PER_PAGE = 2;

/*
exports.getProducts = (req, res, next) => {
    CartItems.findAll()
    .then(result => {
        return res.json(result);
    })
    .catch(err => console.log(err));
};
*/

exports.getProducts = (req, res, next) => {
    const page = req.query.page;

    CartItems.findAll({offset: (page-1)*ITEM_PER_PAGE}, {limit: 2})
    .then(result => {
        return res.json(result);
    })
    .catch(err => console.log(err));
};

exports.getAddToCart = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '..', 'view', 'shop.html'));
    //res.sendFile(path.join(__dirname, '..', 'view', 'style.css'));
    CartItems.findAll()
    .then(result => {
        return res.json(result);
    })
    .catch(err => console.log(err));
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

exports.postUpdateQty = async (req, res, next) => {
    var updatedQty = req.body.newVal;
    var title = req.body.title;

    //console.log(updatedQty);
    console.log(title);

    var obj = {quantity: updatedQty};

    const updatedQ = await CartItems.update(
        obj, 
        {where: {title: title}}
    );

    console.log("updateQ = "+obj.quantity);

    return res.json(obj);

}