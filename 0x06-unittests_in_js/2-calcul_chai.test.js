// Test cases for 1-calcul

const assert = require('chai').expect;
const { expect } = require('chai');
const calculateNumber = require('./1-calcul'); // Replace with the actual path to your function

describe('calculateNumber', () => {
  it('should add two rounded positive numbers when type is SUM', () => {
    const result = calculateNumber('SUM', 3.7, 2.1);
    expect(result).to.equal(6);

  });

  it('should subtract b from a when type is SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 5.6, 2.8);
    expect(result).to.equal(3);
  });

  it('should divide a by b when type is DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 7.5, 2);
    expect(result).to.equal(4);
  });

  it('should return "Error" if b is rounded to 0 and type is DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 10, 0.2);
    expect(result).to.equal('Error');
  });

  it('should throw an error for invalid type', () => {
    const result = calculateNumber('INVALID', 1, 2);
    expect(result).to.equal('Invalid type');
  });

  it('should add two rounded negative numbers when type is SUM', () => {
    const result = calculateNumber('SUM', -3.7, -2.1);
    expect(result).to.equal(-6);
  });

  it('should subtract a from b when type is SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 2.8, 5.6);
    expect(result).to.equal(-3);
  });

  it('should divide b by a when type is DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 2, 7.5);
    expect(result).to.equal(0.25);
  });
});
