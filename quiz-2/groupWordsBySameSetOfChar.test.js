const { groupWordsBySameSetOfChar } = require('./groupWordsBySameSetOfChar')

describe('groupWordsBySameSetOfChar', () => {
  test('Should return object with same charactor as key', () => {
    const words = ['VMRCO', 'VORCM', 'MVOCR']
    const result = groupWordsBySameSetOfChar(words)

    expect(result).toEqual({
      'C,M,O,R,V': ['VMRCO', 'VORCM', 'MVOCR'],
    })
  })

  test('Should return object with same charactor as key by separate key', () => {
    const words = ['VMRCO', 'ABC', 'MVOCR']
    const result = groupWordsBySameSetOfChar(words)

    expect(result).toEqual({
      'C,M,O,R,V': ['VMRCO', 'MVOCR'],
      'A,B,C': ['ABC'],
    })
  })
})
