const toolsConvertNumber = require('../src/romanNumerals');


describe(' Number to Roman numerals', () => {
    test('1 --> I', () => {
        expect(toolsConvertNumber.arabeToRoman(1)).toEqual('I');
    });

    test('10 --> X', () => {
        expect(toolsConvertNumber.arabeToRoman(10)).toEqual('X');
    });

    test('7 --> VII', () => {
        expect(toolsConvertNumber.arabeToRoman(7)).toEqual('VII');
    });

    test('Parameter is ok ', () => {
        expect(() => toolsConvertNumber.arabeToRoman("a")).toThrow(/number/);
    });
});

describe(' Roman numerals to Number  ', () =>{
    // test('I --> 1', () => {
    //     expect(toolsConvertNumber.romanToArabe('i')).toEqual(1);
    // });
    //
    // test('X --> 10', () => {
    //     expect(toolsConvertNumber.romanToArabe('x')).toEqual(10);
    // });
    //
    // test('VII --> 7', () => {
    //     expect(toolsConvertNumber.romanToArabe('VII')).toEqual(7);
    // });

    test('Parameter is ok ', () => {
        expect(() => toolsConvertNumber.romanToArabe(1)).toThrow(/string/);
    });
});