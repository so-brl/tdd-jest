// Add the unit tests of the sum function here

const sum = require('../src/sum');



test('Adds 1 + 2 to equal 3', () => {
    expect(sum(2, 2)).toBe(3);
});


test('Parameters is not number', () => {
        expect(() => sum("a", 2)).toThrow(/number/);
});




