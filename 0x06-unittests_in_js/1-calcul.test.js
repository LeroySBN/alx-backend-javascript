// Test cases for 1-calcul
const assert = require('assert');
const calculateNumber = require('./1-calcul'); // Replace with the actual path to your function

describe('calculateNumber', function() {
  it('should add two rounded positive numbers when type is SUM', function() {
    const result = calculateNumber('SUM', 3.7, 2.1);
    assert.strictEqual(result, 6);
  });

  it('should subtract b from a when type is SUBTRACT', function() {
    const result = calculateNumber('SUBTRACT', 5.6, 2.8);
    assert.strictEqual(result, 3);
  });

  it('should divide a by b when type is DIVIDE', function() {
    const result = calculateNumber('DIVIDE', 7.5, 2);
    assert.strictEqual(result, 4);
  });

  it('should return "Error" if b is rounded to 0 and type is DIVIDE', function() {
    const result = calculateNumber('DIVIDE', 10, 0.2);
    assert.strictEqual(result, 'Error');
  });

  it('should throw an error for invalid type', function() {
    assert.throws(() => calculateNumber('INVALID', 1, 2), Error, 'Invalid type');
  });

  it('should add two rounded negative numbers when type is SUM', function() {
    const result = calculateNumber('SUM', -3.7, -2.1);
    assert.strictEqual(result, -6);
  });

  it('should subtract a from b when type is SUBTRACT', function() {
    const result = calculateNumber('SUBTRACT', 2.8, 5.6);
    assert.strictEqual(result, -3);
  });

  it('should divide b by a when type is DIVIDE', function() {
    const result = calculateNumber('DIVIDE', 2, 7.5);
    assert.strictEqual(result, 4);
  });
});
