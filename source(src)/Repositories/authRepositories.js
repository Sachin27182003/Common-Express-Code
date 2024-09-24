const user = require('../Schema/userSchema');


    
 
    async function authFindUser(parameters){
        try {
            console.log("from userRepositories 1")
            const response = user.findOne({...parameters});
            return response;
        } catch (error) {
            console.log(err.message);
        }
       
    }

    module.exports = {
        authFindUser
    }