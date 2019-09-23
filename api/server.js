const express = require('express'); 
const userRouter = require('../Users/userRouter.js');
const server = express();
server.get('/' , (req, res) => {
    res.json({message: 'Server is Working ...'})
})  
console.log("hello")
server.use(express.json()); 
server.use('/api/users', userRouter);
module.exports = server;
