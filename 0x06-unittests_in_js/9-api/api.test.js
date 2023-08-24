// Test cases for module api: Regex integration testing 
const request = require('request');
const { expect } = require('chai');

describe('Basic integration test', () => {
  const SOURCE = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${SOURCE}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', () => {
    it('GET /cart/:id returns payment methods for valid cart ID', (done) => {
      const cartId = 123; // Replace with a valid cart ID
      request.get(`${SOURCE}/cart/${cartId}`, (err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal(`Payment methods for cart ${cartId}`);
        done();
      });
    });

    it('GET /cart/:id returns 404 for invalid cart ID', (done) => {
      const cartId = 'invalid'; // Replace with an invalid cart ID
      request.get(`${SOURCE}/cart/${cartId}`, (err, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});
