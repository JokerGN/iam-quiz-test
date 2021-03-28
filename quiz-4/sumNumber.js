function sumNumber(input) {
  if (input < 0) throw new Error('input value should be positive')
  let sum = 0
  for (let i = 0; i < input; i++) {
    const baseNumber = i + 1
    sum += Math.pow(baseNumber, baseNumber)
  }
  return sum
}

module.exports = {
  sumNumber,
}
