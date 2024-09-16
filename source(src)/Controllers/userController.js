const { model } = require('mongoose');

function createUser(){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
    console.log("From createUser");
}

module.exports = {
    createUser
}