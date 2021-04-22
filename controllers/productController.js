const admin = require('../routes/adminRoutes');
const Product = require('../models/product');


exports.getHomePage = (req,res,next) => {
    // return res.sendFile(path.join(__dirname , '../' , 'views' , 'homepage.html'));
    const isAdmin = (req.url === '/showProducts') ? true : false;
    // const Products = Product.fetchProducts();
    // console.log(Products);
    Product.findAll({})
           .then(results => {
               console.log(results);
               return res.render("layouts/homepage" , {
                     products: results,
                     isAdmin: isAdmin,
            });
           })
           .catch(err => console.log(err));
   
}

exports.getAddProductPage = (req,res,next) => {
    // return res.sendFile(path.join(__dirname , '../' , 'views' , 'addProduct.html'));
    return res.render("layouts/addProduct" , {
        prodName: "",
        prodPrice:""
    });
}

exports.postAddProductPage = (req,res,next) => {
    // const product = new Product(req.body.prodName , req.body.prodPrice);
    // product.save();
    Product.create({
        id: parseInt(Math.random() * 100),
        prodName: req.body.prodName,
        prodPrice: req.body.prodPrice
    })
    // return res.sendFile(path.join(__dirname , '../' , 'views' , 'home.html'));
    return res.redirect('/'); // url
}

exports.getDetailsPage = (req,res,next) => {
    console.log(req.params.prodId);
    Product.findByPk(req.params.prodId)
            .then(result => {
                console.log(result);
                return res.render('layouts/detailsPage' , {
                    product: result,
                });
            })
            .catch(err => {
                console.log(err);
            })
}

exports.getEditProductPage = (req,res,next) => {
    toEdit = req.params.prodId;
    Product.findByPk(toEdit)
           .then(result => {
                return res.render('layouts/addProduct' , {
                    prodName: result.prodName,
                    prodPrice: result.prodPrice
                })
           })
           .catch(err => {
               console.log(err);
           })
}