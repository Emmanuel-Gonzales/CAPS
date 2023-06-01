'use strict';

const eventEmitter = require('./eventpool');

// BRING IN EVENT EMITTERS AND LISTENERS
require('./vendor');
require('./driver');


eventEmitter.on('pickup', (vendorOrder) => logger('pickup', vendorOrder));
eventEmitter.on('in-transit', (payload) => logger('in-transit', payload));
eventEmitter.on('delivered', (payload) => logger('delivered', payload));

function logger(event, payload){
  let timestamp = new Date;
  console.log('EVENT:', {
    event,
    timestamp,
    payload,
  });
}