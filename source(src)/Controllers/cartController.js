const AppError = require('../utils/appError');
const { getcart, modifyCart } = require('../Services/cartService')

async function getCartById(req, res){
    try {
        console.log("cart controller");
        const cart = await getcart(req.user.id);

        return res.status(200).json({
            success: true,
            message: "Successfully fetched the cart",
            error: {},
            data: cart
        })
    } catch (error) {
        console.log(error);
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                error: error,
                data: {}
            })
        }

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
            data: {} 

        })
    }
}

async function modifyProductToCart(req, res){

    console.log(req.params.operation);
    console.log(req.params.productId);
    try {
    
        const cart = await modifyCart(req.user.id, req.params.operation === 'add', req.params.productId);

        if(req.params.operation === 'add'){
            
            return res.status(200).json({
                success: true,
                message: "Successfully added Product to the cart",
                error: {},
                data: cart
            })  
        } else {
            return res.status(200).json({
                success: true,
                message: "Successfully removed Product to the cart",
                error: {},
                data: cart
            })
        }
        
    } catch (error) {
        console.log(error);
        if(error instanceof AppError){
            return res.status(error.statusCode).json({
                success: false,
                message: error.message,
                error: error,
                data: {}
            })
        }

        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
            data: {} 

        })
    }
}

module.exports = {
    getCartById,
    modifyProductToCart
}