const express = require('express');
const { getCartById } = require('../Controllers/cartController');
const { createUser } = require('../Controllers/userController');
const {login} = require('../Controllers/authController');
const { createProduct, getProduct, deleteProduct } = require('../Controllers/productController');
const { uploader } = require('../Middleware/multerMiddleware');


const cartRouter = express.Router();
const userRouter = express.Router();
const authRouter = express.Router();
const productRouter = express.Router();
const getProductRouter = express.Router();
const deleteProductRouter = express.Router();


// we have to initialize a router object to add routes in a new file /
// Routers are used for segregating your routes in different modules
cartRouter.get('/:id', getCartById);
userRouter.post('/', createUser);
authRouter.post('/', login);
productRouter.post('/products', uploader.single('files'), createProduct);
getProductRouter.get('/:_id', getProduct);
deleteProductRouter.delete('/:_id', deleteProduct);



module.exports = {
    cartRouter,
    userRouter,
    authRouter,
    productRouter,
    getProductRouter,
    deleteProductRouter
}






