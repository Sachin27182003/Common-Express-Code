const express = require('express');
const { getCartById } = require('../Controllers/cartController');
const { createUser } = require('../Controllers/userController');
const {login} = require('../Controllers/authController')


const cartRouter = express.Router();
const userRouter = express.Router();
const authRouter = express.Router();


// we have to initialize a router object to add routes in a new file /
// Routers are used for segregating your routes in different modules
cartRouter.get('/:id', getCartById);
userRouter.post('/', createUser);
authRouter.post('/', login);


module.exports = {
    cartRouter,
    userRouter,
    authRouter
}






