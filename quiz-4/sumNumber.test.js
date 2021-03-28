const { sumNumber } = require('./sumNumber')

describe('sumNumber', () => {
  test('Should return 5 cause it need to be 1^1 + 2^2 = 1 + 4  = 5', () => {
    const input = 2
    const result = sumNumber(input)

    expect(result).toEqual(5)
  })

  test('Should return 3413 cause it need to be 1^1 + 2^2 + ... 5^5 = 1 + 4 + ... + 3125  = 3413', () => {
    const input = 5
    const result = sumNumber(input)

    expect(result).toEqual(3413)
  })

  test('Should throw error if input is minus value', () => {
    const input = -1
    expect(() => sumNumber(input)).toThrowError('input value should be positive')
  })
})
