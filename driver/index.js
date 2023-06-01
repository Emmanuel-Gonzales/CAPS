'use strict';

let eventEmitter = require('../eventpool');

const { driverHandler } = require('./handler');

eventEmitter.on('pickup', driverHandler);