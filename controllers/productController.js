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
        prodPrice:"",
        isEdit: false,
    });
}

exports.postAddProductPage = (req,res,next) => {
    // const product = new Product(req.body.prodName , req.body.prodPrice);
    // product.save();
    Product.create({
        id: parseInt(Math.random() * 100),
        prodName: req.body.prodName,
        prodPrice: req.body.prodPrice,
        userId: req.user.id,
    })
    .then(result => {
        return res.redirect('/'); // url
    })
    .catch(err => console.log(err));
    // return res.sendFile(path.join(__dirname , '../' , 'views' , 'home.html'));
}

exports.getDetailsPage = (req,res,next) => {
    const prodid = req.params.prodId;
    Product.findByPk(prodid)
            .then(results => {
                return res.render('layouts/detailsPage' , {
                    product: results
                })
            })
            .catch(err => console.log(err))
}

exports.getEditProductPage = (req,res,next) => {
   toEdit = req.params.prodId;
   Product.findByPk(toEdit)
          .then(product => {
            return res.render('layouts/addProduct' , {
                prodPrice: product.prodPrice,
                prodName: product.prodName,
                prodId: toEdit,
                isEdit: true
            })
          })
          .catch(err => console.log(err))
}

exports.postEditProductPage = (req,res,next) => {
    const prodid = req.params.prodId;
    Product.findByPk(prodid)
            .then(product => {
                return product.update({
                    id: prodid,
                    prodName: req.body.prodName,
                    prodPrice: req.body.prodPrice,
                })
            })
            .then(result => {
                console.log("Product Edited!")
                return res.redirect("/admin/showProducts");
            })
            .catch(err => console.log(err))
}

exports.deleteProductPage = (req,res,next) => {
    const prodid = req.params.prodId;
    Product.findByPk(prodid)
           .then((product) => {
               return product.destroy()
           })
           .then(result => {
               console.log("Product Deleted!");
               return res.redirect("/")
           })
           .catch(err => console.log(err))
}