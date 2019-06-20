const express = require('express');

const server = express();
const friendsRouter = require('../friends/friendsRouter')

server.use(express.json());


server.use('/friends', friendsRouter);


module.exports = server;