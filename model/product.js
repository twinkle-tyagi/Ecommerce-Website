const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const cartItems = sequelize.define('cartItems1', {
    id: {
        type: Sequelize.INTEGER
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING,
        primaryKey: true
    },
    imgUrl: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantity: Sequelize.INTEGER
});

module.exports = cartItems;