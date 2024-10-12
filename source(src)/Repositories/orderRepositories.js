const order = require('../Schema/orderSchema');
const { InternalServerError } = require('../utils/internalServerError');

async function createNewOrder(orderDetails){
 
    try {
        const Order = await order.create(orderDetails);
        return Order;
    } catch (error) {
        // if(error.name === 'ValidationError'){

        //     const errorMessageList = Object.keys(error.errors).map((property)=>{
        //         return error.errors[property].message;
        //     }) 
        //     throw new BadRequestError(errorMessageList);

        // }
        console.log(error);
        throw new InternalServerError();
    }
}

async function fetchOrders(userId){

    try {
        const orders = await order.find(userId);
        return orders;
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    createNewOrder,
    fetchOrders
}