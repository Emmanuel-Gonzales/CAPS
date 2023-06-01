'use strict';

const eventEmitter = require('../eventpool');
const { vendorHandler, thankYou } = require('../vendor/handler');

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

describe('Vendor Handlers', () => {
  test('vendor handler', () => {
    let vendorOrder = {
      store: 'exStore',
      orderId: 'order123',
      customer: 'John Doe',
      address: '123 sreet',
    };

    vendorHandler(vendorOrder);
    expect(eventEmitter.emit).toHaveBeenCalledWith('pickup', vendorOrder);
  });

  test('Test the deliver handler', () => {
    let payload = {
      store: 'exStore',
      orderId: 'order123',
      customer: 'John Doe',
      address: '123 sreet',
    };

    thankYou(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`Thank you for your order ${payload.customer}`);
  });
});
