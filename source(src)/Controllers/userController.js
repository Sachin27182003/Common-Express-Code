const {registerUser} = require('../Services/userService');


async function createUser(req, res){}
    console.log(req.body);

   

    try {
        const response = await registerUser(req.body);
        return res.status(201).json({
            message: "User Registered successfully",
            success: true,
            data: response,
            error: {}
        })
        
    } catch (error) {
        let errorMessage = error.message;
        if (error.errors) {
            if (error.errors.email.message && error.errors.email.message) {
                errorMessage = error.errors.email.message;
            } else if (error.errors.mobileNumber.message && error.errors.mobileNumber.message) {
                errorMessage = error.errors.mobileNumber.message;
            }
        }
        return res.status(error.statusCode || 500).json({
            success: false,
            data: {},
            error: errorMessage,
            statusCode: error.statusCode
        })
    }
}



module.exports = {
    createUser
}