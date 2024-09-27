const {addProduct, getProductById, deleteProductById} = require('../Repositories/productRepositories')
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;



async function registerProduct(userDetails, imageDetails){

    

    const product = await addProduct({
        name: userDetails.name,
        description: userDetails.description,
        productImage: imageDetails.url || imageDetails,
        price: userDetails.price,
        category: userDetails.category,
        inStock: userDetails.inStock

    })

    if(!product){
        throw {message: "Something went wrong while registering new product", statuscode: 500}
    }

    return product
}

async function findProductById(productID){

    console.log("From product service");

    if (!ObjectId.isValid(productID)) {
        return res.status(400).send({ error: 'Invalid product ID' });
      }


    console.log("after validation");
    const response = await getProductById(productID);
    
   if(!response){
    throw {message: "Product not found", statusCode: 404};
   } else {
    return response;
   }
}

async function findAndDeleteProductByID(productID){

    const response = await deleteProductById(productID);
    
   if(!response){
    throw {message: "Product Not Found To Delete", statusCode: 500};
   } else {
    return response;
   }

}

module.exports = {
    registerProduct,
    findProductById,
    findAndDeleteProductByID
}