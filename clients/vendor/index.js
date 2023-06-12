'use strict';

// let eventEmitter = require('../eventpool');
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');

const { vendorHandler, deliveredHandler } = require('./handler');


setInterval(() => {
  vendorHandler();
}, 5000);

socket.on('delivered', deliveredHandler);

