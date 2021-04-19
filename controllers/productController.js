const admin = require('../routes/adminRoutes');
const Product = require('../models/product');


exports.getHomePage = (req,res,next) => {
    // return res.sendFile(path.join(__dirname , '../' , 'views' , 'homepage.html'));
    const Products = Product.fetchProducts();
    return res.render("layouts/homepage" , {
        products: Products
    });
}

exports.getAddProductPage = (req,res,next) => {
    // return res.sendFile(path.join(__dirname , '../' , 'views' , 'addProduct.html'));
    return res.render("layouts/addProduct");
}

exports.postAddProductPage = (req,res,next) => {
    console.log(req.body);
    const product = new Product(req.body.prodName , req.body.prodPrice);
    product.save();
    // return res.sendFile(path.join(__dirname , '../' , 'views' , 'home.html'));
    return res.redirect('/'); // url
}