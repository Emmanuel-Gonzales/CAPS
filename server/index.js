'use strict';

// const eventEmitter = require('./eventpool');
require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;

const server = new Server();

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  // confirmation that a client is connected
  console.log('connected to the caps namespace', socket.id);
  socket.onAny((event, payload) => {
    let timestamp = new Date();
    // will log everything as required by lab
    console.log('EVENT: ', { event, timestamp, payload });
  });

  socket.on('pickup', (vendorOrder) => caps.emit('pickup', vendorOrder));
  socket.on('in-transit', (payload) => caps.emit('in-transit', payload));
  socket.on('delivered', (payload) => caps.emit('delivered', payload));
  
  // function logger(event, payload){
  //   let timestamp = new Date;
  //   console.log('EVENT:', {
  //     event,
  //     timestamp,
  //     payload,
  //   });
  // }

});


console.log('listening on PORT:', PORT);
server.listen(PORT);