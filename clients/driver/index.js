'use strict';

// let eventEmitter = require('../eventpool');
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

const { pickupHand, deliverHand } = require('./handler');


socket.on('pickup',(payload) => {
  setTimeout(() => {
    pickupHand(payload);
  }, 1000);

  setTimeout(() => {
    deliverHand(payload);
  }, 2000);
});