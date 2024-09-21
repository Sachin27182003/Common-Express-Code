const userService = require('../Services/userService');
const { userRepository } = require('../Repositories/userRepositories')


async function createUser(req, res){
    console.log("From userController");
    console.log(req.body);


    const user_Service = new userService(new userRepository());
   

    try {
        const response = await user_Service.registerUser(req.body);
        return res.status(201).json({
            message: "User Registered successfully",
            success: true,
            data: response,
            error: {}
        })
        
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            error: error.errors.email.message
        })
    }
}



module.exports = {
    createUser
}