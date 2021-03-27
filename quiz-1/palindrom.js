function isPalindrome(word) {
  const regExp = /[^A-Za-z0-9]/g

  const inputWord = word.toLowerCase().replace(regExp, '')

  const reverseWord = inputWord.split('').reverse().join('')

  return inputWord === reverseWord
}

module.exports = {
  isPalindrome
}