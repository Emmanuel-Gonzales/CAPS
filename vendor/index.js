'use strict';

let eventEmitter = require('../eventpool');

const vendorHandler = (name) => {
  setInterval(() => {
    let vendorOrder = {
      store: '1-206-flowers',
      orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    };
    console.log('yup');
    eventEmitter.emit('pickup', vendorOrder);
  }, 5000);
};
vendorHandler();
module.exports = vendorHandler;
