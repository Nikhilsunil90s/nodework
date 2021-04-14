const express = require('express');
const router = express.Router();
const path = require('path');
const admin = require('./adminRoutes');


router.get('/' , (req,res,next) => {
    console.log(admin.Products);
    return res.sendFile(path.join(__dirname , '../' , 'views' , 'homepage.html'));
})

module.exports = router;