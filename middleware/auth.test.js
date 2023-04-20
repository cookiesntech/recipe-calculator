const auth = require('./auth');

test("adds 1 + 2 to equal 3", () => {
    expect(auth.testFunction(1,2)).toBe(3);
})