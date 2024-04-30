const { sum, subtract } = require('../app');

describe('Testing arithmetic operations', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

});