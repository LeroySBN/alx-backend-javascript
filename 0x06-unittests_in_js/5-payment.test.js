const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with arguments 100 and 20 and log the result', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert.strictEqual(calculateNumberStub.calledWith('SUM', 100, 20), true);
    assert.strictEqual(consoleLogSpy.calledWith('The total is: 120'), true);

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with arguments 10 and 10 and log the result', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 10, 10).returns(20);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(10, 10);

    assert.strictEqual(calculateNumberStub.calledWith('SUM', 10, 10), true);
    assert.strictEqual(consoleLogSpy.calledWith('The total is: 20'), true);

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
