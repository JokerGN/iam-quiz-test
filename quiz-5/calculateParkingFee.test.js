const { calculateParkingFee } = require('./calculateParkingFee')

describe('calculateParkingFee', () => {
  test('Price should be free cause parking for 25 minutes', () => {
    const hour = 0
    const minute = 25

    const result = calculateParkingFee(hour, minute)

    expect(result).toEqual(0)
  })

  test('Price should be 10 bath/hour parking for 1 hour and 20 minutes', () => {
    const hour = 1
    const minute = 20

    const result = calculateParkingFee(hour, minute)

    expect(result).toEqual(20)
  })

  test('Price should be 20 bath/hour parking for 5 hour and 10 minutes', () => {
    const hour = 5
    const minute = 10

    const result = calculateParkingFee(hour, minute)

    expect(result).toEqual(120)
  })

  test('Price should be 200 bath/day parking for 8 hour and 10 minutes', () => {
    const hour = 8
    const minute = 10

    const result = calculateParkingFee(hour, minute)

    expect(result).toEqual(200)
  })

  test('Price should be 200 bath/day parking for 8 hour and 10 minutes', () => {
    const hour = 8
    const minute = 10

    const result = calculateParkingFee(hour, minute)

    expect(result).toEqual(200)
  })

  test('Should throw error if input is minus value', () => {
    const hour = 2
    const minute = 65
    expect(() => calculateParkingFee(hour, minute)).toThrowError('Minute should not more or equal 60')
  })
})
