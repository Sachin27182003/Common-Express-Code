const { product } = require('../Schema/productSchema')

async function addProduct(productDetails){

    try {
        const response = product.create(productDetails);
        return response;
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = {
    addProduct
}