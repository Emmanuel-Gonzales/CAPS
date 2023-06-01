'use strict';

const eventEmitter = require('../eventpool');


const pickupHand = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  eventEmitter.emit('in-transit', payload);
};

const deliverHand = (payload) => {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  eventEmitter.emit('delivered', payload);
};

let driverHandler = (payload) => {
  setTimeout(() => {
    pickupHand(payload);
  }, 1000);

  setTimeout(() => {
    deliverHand(payload);
  }, 2000);
};

module.exports = { driverHandler, pickupHand, deliverHand };