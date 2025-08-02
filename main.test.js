const { capitalize, reverseString, Calculators, caesarCipher, analyzeArray } = require('./main');

test('capitalizes first character of a lowercase word', () => {
    expect(capitalize('javascript')).toBe('Javascript');
});

test('reverses a string with mixed characters', () => {
    expect(reverseString('Abc123')).toBe('321cbA');
});

test('adds two positive numbers correctly', () => {
    expect(Calculators.add(10, 5)).toBe(15);
});

test('subtracts larger number from smaller number resulting in negative', () => {
    expect(Calculators.subtract(3, 7)).toBe(-4);
});

test('divides numbers resulting in a float', () => {
    expect(Calculators.divide(7, 2)).toBeCloseTo(3.5);
});

test('multiplies positive and negative number', () => {
    expect(Calculators.multiply(-4, 6)).toBe(-24);
});

test('caesar cipher with wrap-around and mixed case', () => {
    expect(caesarCipher('Zebra', 2)).toBe('Bgdtc');
});

test('analyzeArray calculates correct stats for mixed positive numbers', () => {
    expect(analyzeArray([10, 20, 30, 40])).toEqual({
        average: 25,
        min: 10,
        max: 40,
        length: 4
    });
});
