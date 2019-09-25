// Libraries
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Files
const userRouter = require('../API/routes/user-router')
const habitRouter = require('../API/routes/habit-router');

const server = express();

// Use Libraries
server.use(express.json());
server.use(cors());
server.use(helmet());

// Use Files
server.use('/api/users', userRouter);
server.use('/api/habits', habitRouter);


// Sanity Check
server.get('/', (req, res) => {
    res.status(200).json({ api: 'API is working'});
})

module.exports = server;
