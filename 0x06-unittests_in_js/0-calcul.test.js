// Basic test with Mocha and Node assertion library
var assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of two numbers', function() {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should return the sum of two rounded numbers', function() {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should handle negative numbers', function() {
    const result = calculateNumber(-1.2, -3.7);
    assert.strictEqual(result, -5);
  });
})
