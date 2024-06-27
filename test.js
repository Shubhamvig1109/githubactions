const { testingAddition } = require('./index.js')


test('addition', () => {
    exprect(testingAddition(2, 3).toBe(5))
})


