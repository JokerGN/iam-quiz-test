const { genPossibleStrings } = require('./genPosibleStrings')

describe('genPosibleStrings', () => {
  test('Should return possible strings', () => {
    const input = 'ABC'
    const result = genPossibleStrings(input)

    expect(result).toEqual([
      'A,B,C',
      'B,A,C',
      'B,C,A',
      'C,B,A',
      'C,A,B',
      'A,C,B',
    ])
  })
})
