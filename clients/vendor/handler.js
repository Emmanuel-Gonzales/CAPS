'use strict';

// let eventEmitter = require('../eventpool');
const { io } =  require('socket.io-client');
const socket =  io('http://localhost:3001/caps');
var Chance = require('chance');
var chance = new Chance;

const vendorHandler = (vendorOrder=null) => {
  if(!vendorOrder){
    vendorOrder = {
      store: chance.company(),
      orderId: chance.guid(),
      customer: chance.name(),
      address: chance.address(),
    };
  }
  socket.emit('pickup', vendorOrder);
};

const thankYou = (payload) => console.log(`Thank you for your order ${payload.customer}`);

const deliveredHandler = (payload) => {
  setTimeout(() => {
    thankYou(payload);
  }, 1000);
};

module.exports = { vendorHandler, deliveredHandler, thankYou};