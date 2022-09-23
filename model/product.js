const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const cartItems = sequelize.define('cartItems1', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING
    },
    imgUrl: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

module.exports = cartItems;