const user = require('../Schema/userSchema');

class userRepository {
    
 
    async findUser(parameters){
        try {
            console.log("from userRepositories 1")
            const response = user.findOne({...parameters});
            return response;
        } catch (error) {
            console.log(err.message);
        }
       
    }

    async createUser(userDetails){
        try {
            console.log("from userRepositories 2")
            const response = user.create(userDetails);
            return response;
        } catch (error) {
            console.log(error.message);
        }
      
    }
}

module.exports = {
    userRepository
}