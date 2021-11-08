const squareRoot = require('./func_2')

test('squareRoot function should be defined and truthy', () =>{
    expect(squareRoot(0)).toBeDefined()
    expect(squareRoot(0)).toBeTruthy()

})

test('squareRoot function should not have a deal with number less then 5', () =>{
    expect(squareRoot(0)).toEqual([])
    expect(squareRoot(1)).toEqual([])
    expect(squareRoot(2)).toEqual([])
    expect(squareRoot(4)).toEqual([])
    expect(squareRoot(5)).toEqual([])
})

test('squareRoot function should not contain falsy values', () =>{
    expect(squareRoot(false)).not.toContain(false)
    expect(squareRoot(0)).not.toContain(0)
    expect(squareRoot('')).not.toContain('')
    expect(squareRoot(null)).not.toContain(null)
})

test('squareRoot function must return the sum of the squares of three numbers that are equal to the sum of accepted number', () =>{
    let result = [2, 2, 2]
    expect(squareRoot(12)).toEqual([result])
})