function swap(array, index1, index2) {
  const temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
  return array
}

function genPossibleStrings(input) {
  const inputSplit = input.split('')

  const resultArray = [inputSplit]

  while (resultArray.length == 1 || resultArray[resultArray.length - 1].join() !== resultArray[0].join()) {
    for (let i = 0; i < input.length - 1; i++) {
      const swapArray = resultArray[resultArray.length - 1].slice()
      const result = swap(swapArray, i, i + 1)

      resultArray.push(result)
    }
  }

  const mapedResult = resultArray.map(result => result.join())

  const filteredResult = mapedResult.filter((result,index,self) => self.indexOf(result) === index)

  return filteredResult
}

module.exports = {
  genPossibleStrings
}