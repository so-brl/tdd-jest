// Add the unit tests of the sum function here

const fizzBuzzResult = require('../src/fizzBuzz');


test('Fizz', () => {
        expect(fizzBuzzResult(3)).toEqual('Fizz');
    });

test('Buzz', () => {
    expect(fizzBuzzResult(5)).toEqual('Buzz');
});

test('FizzBuzz', () => {
    expect( fizzBuzzResult(15)).toEqual('Buzz');
});

test('not Fizz/Buzz', () => {
    expect( fizzBuzzResult(14)).toEqual(14);
});


