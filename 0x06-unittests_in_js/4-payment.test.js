const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the result', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 100, 20).returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    assert.strictEqual(calculateNumberStub.calledWith('SUM', 100, 20), true);
    assert.strictEqual(consoleLogSpy.calledWith('The total is: 10'), true);

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
