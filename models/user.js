const database = require('../utils/database');

const Sequelize = require('sequelize');

const user = Sequelize.define('users' , {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = user;