const {validateLogin} = require('../Services/authService');

async function login(req, res){

    
    try {
        const loginPayload = req.body;

        const response = await validateLogin(loginPayload);
        
        return res.status(200).json({
            success: true,
            message: "logged in successfully",
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
    login
}