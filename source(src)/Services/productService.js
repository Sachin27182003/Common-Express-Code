const {addProduct} = require('../Repositories/productRepositories')



async function registerProduct(userDetails, imageDetails){

    const product = await addProduct({
        name: userDetails.name,
        description: userDetails.description,
        productImage: imageDetails.url,
        price: userDetails.price,
        category: userDetails.category,
        inStock: userDetails.inStock

    })

    if(!product){
        throw {message: "Something went wrong while registering new product", statuscode: 500}
    }

    return product
}

module.exports = {
    registerProduct
}