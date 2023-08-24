// Test cases for module 0-calcul
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.9, 3.9), 6)
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });
});
