const express = require('express');

const serverConfig = require('./config/serverConfig');

const app = express();




app.listen(serverConfig.PORT, () => {
    console.log(`server started on port ${serverConfig.PORT}...!`);
    // console.log(process.env.PORT).....
    console.log(process.env.NAME)
})

