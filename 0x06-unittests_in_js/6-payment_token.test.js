// Test case for module 6-payment_token
const { expect } = require('chai');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token'); // Replace with the actual path to your function

describe('getPaymentTokenFromAPI', () => {

  it('should return a resolved promise with a successful response', (done) => {
    const promise = getPaymentTokenFromAPI(true);

    promise.then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch(done);
  });

  it('should return a pending promise when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Promise should not resolve'));
      })
      .catch((error) => {
        expect(error).to.be.an.instanceOf(Error);
        done();
      });
  });
  
});
