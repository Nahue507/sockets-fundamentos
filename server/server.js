const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const socketIo = require('socket.io');
const http = require('http');
const server = http.createServer(app);

app.use(express.static(publicPath));

//Io = esta es la comunicacion con del backend 

module.exports = io = socketIo(server);
require('./sockets/socket')



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});