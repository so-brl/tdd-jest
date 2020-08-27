// Add the unit tests of the sum function here

const fizzBuzzResult = require('../src/fizzBuzz');



test('Fizz', () => {
        expect(fizzBuzzResult(3)).toEqual('Fizz');
   // expect(() =>fizzBuzz(99, 2)).toThrow(/Fizz/);
    });

test('Buzz', () => {
    expect(fizzBuzzResult(5)).toEqual('Buzz');
    //expect(() =>fizzBuzz(99, 5)).toThrow(/Buzz/);
});

test('FizzBuzz', () => {
    expect( fizzBuzzResult(15)).toEqual('Buzz');
    //expect(() =>fizzBuzz(99, 15)).toThrow(/FizzBuzz/);

});

test('not Fizz/Buzz', () => {
    expect( fizzBuzzResult(14)).toEqual(14);
    //expect(() =>fizzBuzz(99, 14)).toThrow(14);
});


