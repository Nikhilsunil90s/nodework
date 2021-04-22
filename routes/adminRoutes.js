const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/productController');


router.get("/showProducts" , productController.getHomePage);

router.get("/product/edit/:prodId" , productController.getEditProductPage);

router.get("/addProduct" , productController.getAddProductPage);

router.post("/addProduct" , productController.postAddProductPage);

module.exports = router;
// exports.router = router;
