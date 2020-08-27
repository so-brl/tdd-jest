// Add the unit tests of the sum function here

const fizzBuzzResult = require('../src/fizzBuzz');



test('Fizz', () => {
        expect(fizzBuzzResult(3)).toBe('Fizz');
    });

test('Buzz', () => {
    expect(fizzBuzzResult(5)).toBe('Buzz');
});

test('FizzBuzz', () => {
    expect( fizzBuzzResult(15)).toBe('FizzBuzz');
});

test('not Fizz/Buzz', () => {
    expect( fizzBuzzResult(14)).toBe(14);
});


