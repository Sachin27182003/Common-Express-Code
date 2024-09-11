const mongoose = require('mongoose');
const serverConfig = require('./serverConfig');


async function connectDB(){
    try {
        await mongoose.connect(serverConfig.DB_URl);
        console.log("Connected to MongoDb successfully");
        // console.log(serverConfig.DB_URl)
    } catch (error) {
        console.log("Unable to connect to Mongo DB");
        console.log(error);
    }
}


module.exports = connectDB;

