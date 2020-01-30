const express = require('express');
const cors = require('cors');

const authRouter = require('./middleware/authRouter.js');
const usersRouter = require('./users/usersRouter.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

module.exports = server;