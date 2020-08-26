// Add the unit tests of the sum function here

const multiplies = require('../src/multiplies');



test('Multiplies 1 * 2 to equal 2', () => {
    expect(multiplies(1 , 2)).toBe(2);
});


test('Parameters is not number', () => {
    expect(() => multiplies("a", 2)).toThrow(/number/);
});

