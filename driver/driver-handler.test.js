'use strict';

const eventEmitter = require('../eventpool');
const { pickupHand, deliverHand } = require('./handler');

jest.mock('../eventpool.js', () => {
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
    expect(eventEmitter.emit).toHaveBeenCalledWith('in-transit', payload);
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
    expect(eventEmitter.emit).toHaveBeenCalledWith('delivered', payload);
  });
});