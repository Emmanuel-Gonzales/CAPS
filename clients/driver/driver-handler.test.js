'use strict';

// const eventEmitter = require('../eventpool');

const { io } =  require('socket.io-client');
const socket =  io('http://localhost:3001/caps');
const { pickupHand, deliverHand } = require('./handler');

jest.mock('socket.io-client', () => {
  return{
    on: jest.fn(),
    emit: jest.fn(),
  };
});

let consoleSpy;
beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'log').mockImplementation();
});

afterEach(() => {
  consoleSpy.mockRestore();
});

describe('driver handler', () => { 
  test('Testing pickup Functions', () => {
    let payload = {
      store: 'exStore',
      orderId: 'order123',
      customer: 'John Doe',
      address: '123 sreet',
    };

    pickupHand(payload);

    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderId}`);
    expect(socket.emit).toHaveBeenCalledWith('in-transit', payload);
  });

  test('Testing deliver Functions', () => {
    let payload = {
      store: 'exStore',
      orderId: 'order123',
      customer: 'John Doe',
      address: '123 sreet',
    };

    deliverHand(payload);

    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: delivered ${payload.orderId}`);
    expect(socket.emit).toHaveBeenCalledWith('delivered', payload);
  });
});