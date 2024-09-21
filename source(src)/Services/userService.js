class userService {

    
    constructor(userRepository){
        console.log("from userService")
        this.userRepository = userRepository;
    }

    
    async registerUser(userDetails){
    // it will create a brand new user in database;
    
    //we need to check if the user with this email and mobile number already exists or not
    const user = await this.userRepository.findUser({
        $or: [
        {email: userDetails.email},
        {mobileNumber: userDetails.mobileNumber}
        ]
    })
    
    //if user not found 
    if(user){
        throw { reason: "User already Found ", StatusCode: 400}
    }

    // if not then create a new user in the database;
    const newUser = await this.userRepository.createUser({

        firstName : userDetails.firstName,
        lastName: userDetails.lastName,
        mobileNumber: userDetails.mobileNumber,
        email: userDetails.email,
        password: userDetails.password
    })

    if(!newUser){
        throw { reason : "Something went wrong, Unable to create user", StatusCode: 500}
    }

    //return the details of new user
    return newUser;


    }
}

module.exports = userService;