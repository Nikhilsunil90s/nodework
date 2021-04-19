Products = [];

const Product = class{
    constructor(title, price){
        this.prodName = title;
        this.prodPrice = price;
    }

    save(){
        return Products.push(this);
    }

    static fetchProducts(){
        return Products;
    }
}

module.exports = Product;