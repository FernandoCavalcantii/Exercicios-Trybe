const { sum } = require('../src/sum');

it('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});