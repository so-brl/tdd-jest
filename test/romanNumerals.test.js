const romanConvertNumber = require('../src/romanNumerals');

test('1 --> I', () => {
    expect(romanConvertNumber(1)).toEqual('I');
});

test('10 --> X', () => {
    expect(romanConvertNumber(10)).toEqual('X');
});

test('7 --> VII', () => {
    expect(romanConvertNumber(7)).toEqual('VII');
});

test('Parameter is ok ', () => {
    expect(() =>romanConvertNumber("a")).toThrow(/number/);
});