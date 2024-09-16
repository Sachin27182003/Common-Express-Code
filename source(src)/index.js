// If you clone this from my github repositry you have to run a command "npm install" to terminal
// to install node_module file. it's very important for youu !!

const express = require('express');

// helps to read json file from api
const bodyParser = require('body-parser');

const serverConfig = require('./config/serverConfig');
const connectDB = require('./config/dbConfig');
const userRouter = require('./Routes/userRoute');
const cartRouter = require('./Routes/cartRoute');
// const user = require('./Schema/userSchema');


const app = express();



app.use(bodyParser.json());
// helps to read json file coming from servers
app.use(bodyParser.text());
// helps to read text file coming from servers
app.use(bodyParser.urlencoded({extended: true}));
// helps to read form data coming from servers and {extended:true} helps to get complex data
// if its true it get complex data using qs library if its false it will not get any complex data

// Another alternative exist if you dont want to use body-parser you can directly use express.Json


//Routing middleware
app.use('/users', userRouter);
app.use('/carts', cartRouter);


app.post('/ping', (req, res)=>{
    console.log(req.body);
    return res.json({message: "pong"});
})


app.listen(serverConfig.PORT, async () => {
    await connectDB();
    console.log(`server started on port ${serverConfig.PORT}...!`);
    // console.log(process.env.PORT).....

    // try {
    //     const userData = await user.create({
    //         firstName: "Rahul",
    //         secondtName: "Kumar",
    //         mobileNumber: "5834767897",
    //         email: "6gyfrd9643H@example.com",
    //         password: "Rahul@123654"
    //     })

    //     console.log("created New User ");
    //     console.log(userData);
    // } catch (error) {
    //     console.log(error.message)
    // }
    

    
    
})

// To start directly write "npm start" on terminal


// username : sachinsachinkumar27082003
// password: pK9yeItSxme9qxef


//  mongodb+srv://sachinsachinkumar27082003:pK9yeItSxme9qxef@cluster0.18vnj
/// .mongodb.net/?retryWrites=true&w=majority&appName=Cluster0