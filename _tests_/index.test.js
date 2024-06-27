// __tests__/index.test.js
const { testingAddition } = require('../index');

test('adds 2 + 3 to equal 5', () => {
  expect(testingAddition(2, 3)).toBe(5);
});
