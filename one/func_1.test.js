const evenNumbers = require('./func_1')
// import evenNumbers from './func_1'

test('function evenNumbers should display the amount of odd numbers', () =>{
    expect(evenNumbers([1, 2, 3, 4])).toBe(2)
    expect(evenNumbers([20, 21, 32, 48, 97])).toBe(2)
    expect(evenNumbers([100, 200, 201, 483])).toBe(2)

    expect(evenNumbers([2, '29', 3, 4, '7', 'string', 10, -4, 17])).toBe(2)
})

test('function evenNumbers should not count the string type of numbers', () =>{
    expect(evenNumbers([2, '19', 3, 4, '173'])).toBe(1)
    expect(evenNumbers([4, '25', 51, '301', '6'])).toBe(1)
})

test('function evenNumbers should not count the negative numbers', () =>{
    expect(evenNumbers([2, '-9', 3, -4, '17'])).toBe(1)
    expect(evenNumbers([-4, '-5', 3, -3, -100, -233])).toBe(1)
})