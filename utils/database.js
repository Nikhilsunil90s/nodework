const Sequelize = require('sequelize');

const connection = new Sequelize('Shop' , 'root' , 'webcom123' , {dialect: 'mysql'});

module.exports = connection