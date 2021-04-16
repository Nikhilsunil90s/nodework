const express = require('express');
const router = express.Router();
const path = require('path');
const Products = [];

router.get("/addProduct" , (req,res,next) => {
    // return res.sendFile(path.join(__dirname , '../' , 'views' , 'addProduct.html'));
    return res.render("layouts/addProduct");
})

router.post("/addProduct" , (req,res,next) => {
    console.log(req.body);
    Products.push(req.body);
    // return res.sendFile(path.join(__dirname , '../' , 'views' , 'home.html'));
    return res.redirect('/'); // url
})

// module.exports = router;
exports.router = router;
exports.Products = Products;
