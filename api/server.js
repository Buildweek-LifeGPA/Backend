const express = require('express'); 
const userRouter = require('../Users/userRouter.js');
const server = express();
server.use(express.json()); 
server.get('/' , (req, res) => {
    res.json({message: 'Server is Working ...'})
})  

server.use("/api/user", userRouter);
module.exports = server;
