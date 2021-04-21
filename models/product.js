// Products = [];

// const Product = class{
//     constructor(title, price){
//         this.id = parseInt(Math.random() * 1000);
//         this.prodName = title;
//         this.prodPrice = price;
//     }

//     save(){
//         return Products.push(this);
//     }

//     static fetchProducts(){
//         return Products;
//     }
// }

// module.exports = Product;
const database = require('../utils/database');
const sequelize = require('sequelize');

const Product = database.define('products' , {
    id: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    prodName: {
        type: sequelize.STRING,
        allowNull: false,
    },
    prodPrice: {
        type: sequelize.FLOAT,
        allowNull: false,
    }
})


module.exports = Product;