const { product } = require('../Schema/productSchema')

async function addProduct(productDetails){

    try {
        const response = product.create(productDetails);
        return response;
    } catch (error) {
        console.log(error.message);
    }

}

async function getProductById(productId){
    try {
        const Product = await product.findById(productId);
        return Product;
    } catch (error) {
        console.log(error);
    }
}

async function deleteProductById(productId){
    try {
        const response = await product.findByIdAndDelete(productId)
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addProduct,
    getProductById,
    deleteProductById
}