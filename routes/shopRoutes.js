const express = require('express');
const router = express.Router();
const path = require('path');
const productController = require('../controllers/productController');

router.get('/' , productController.getHomePage);

router.get('/product/:prodId' , productController.getDetailsPage);


module.exports = router;