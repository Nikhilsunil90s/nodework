const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/productController');


router.get("/showProducts" , productController.getHomePage);

router.get("/product/edit/:prodId" , productController.getEditProductPage);

router.post("/product/edit/:prodId" , productController.postEditProductPage);

router.get("/addProduct" , productController.getAddProductPage);

router.post("/addProduct" , productController.postAddProductPage);

router.get("/product/delete/:prodId" , productController.deleteProductPage);

module.exports = router;
// exports.router = router;
