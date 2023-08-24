// Test cases for 2-calcul_chai

const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should add two rounded positive numbers when type is SUM', () => {
    expect(calculateNumber('SUM', 3.7, 2.1)).to.equal(6);

  });

  it('should subtract b from a when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 5.6, 2.8)).to.equal(3);
  });

  it('should divide a by b when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 7.5, 2)).to.equal(4);
  });

  it('should return "Error" if b is rounded to 0 and type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 10, 0.2)).to.equal('Error');
  });

  it('should throw an error for invalid type', () => {
    expect(() => calculateNumber('INVALID', 1, 2)).to.throw('Invalid type');
  });

  it('should add two rounded negative numbers when type is SUM', () => {
    expect(calculateNumber('SUM', -3.7, -2.1)).to.equal(-6);
  });

  it('should subtract a from b when type is SUBTRACT', () => {
    expect(calculateNumber('SUBTRACT', 2.8, 5.6)).to.equal(-3);
  });

  it('should divide b by a when type is DIVIDE', () => {
    expect(calculateNumber('DIVIDE', 2, 7.5)).to.equal(0.25);
  });
});
