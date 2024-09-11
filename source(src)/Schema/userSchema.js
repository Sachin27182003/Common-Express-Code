const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
       type: String,
       required: [true, "First name is required"],
       minlength: [5, "First name shouldn'be less than 5 character"],
       lowercase: true,
       trim: true,
       maxlength: [20, "First name shouldn't be exceed by 20 character"]
    },

    secondtName:{
        type: String,
        minlength: [5, "First name shouldn'be less than 5 character"],
        lowercase: true,
        trim: true,
        maxlength: [20, "First name shouldn't be exceed by 20 character"]
     },

    mobileNumber:{
        type: String,
        trim: true,
        require: [true, "Mobile number can't be empty"],
        unique: [true, "Mobile number already exist"],
        minlength: [10, "Please enter a valid phone number"],
        maxlength: [13, "Please enter a valid phone number"]
    },
    email:{
        type: String,
        lowercase: true,
        trim: true,
        unique: [true, "Email already exist"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: [true, "Email address can not be empty"], 
    },
    password:{
        type: String,
        require: [true, "Password can't be empty"],
        minlength: [8, "Password should be more than 8 character"]
    } 
},{timestamps: true, versionKey: true})

const user = mongoose.model("User", userSchema);


module.exports = user;