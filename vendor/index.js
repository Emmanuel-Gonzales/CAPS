'use strict';

let eventEmitter = require('../eventpool');

const { vendorHandler, deliveredHandler } = require('./handler');

setInterval(() => {
  vendorHandler();
}, 5000);

eventEmitter.on('delivered', deliveredHandler);

