'use strict';

// const eventEmitter = require('../eventpool');
const { io } =  require('socket.io-client');
const socket =  io('http://localhost:3001/caps');

const pickupHand = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  socket.emit('in-transit', payload);
};

const deliverHand = (payload) => {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  socket.emit('delivered', payload);
};



module.exports = { pickupHand, deliverHand };