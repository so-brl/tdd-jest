// Add the unit tests of the sum function here

const fizzBuzz = require('../src/fizzBuzz');



test('Fizz', () => {
    var eleveNumber = 33;
    var runNumber = 3;
    var totalRun = eleveNumber*runNumber;
    var number = 0;
    for( var i = 0 ; i <= totalRun ; i++ ){
        expect(() => fizzBuzz(number)).toThrow();
        //expect(fizzBuzz(number).toBe('Fizz'));
    }



});
// test('Buzz', () => {
//     expect(() => fizzBuzz()).toThrow('Buzz');
// });
// test('FizzBuzz', () => {
//     expect(() => fizzBuzz()).toThrow('FizzBuzz');
// });

// test(number, () => {
//     expect(() => fizzBuzz()).toThrow(number);
// });