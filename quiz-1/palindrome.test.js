const { isPalindrome } = require('./palindrom')

describe('isPalindrom function', () => {
  test(`"Deleveled" should be true casuse it's palindrome word`, () => {
    const word = "Deleveled"
    const result = isPalindrome(word)

    expect(result).toBe(true)
  })

  test(`"race car" should be true cause it's palindrom word`, () => {
    const word = "race car"
    const result = isPalindrome(word)

    expect(result).toBe(true)
  })

  test(`"Not palindrome" should be false cause it's not palindrom word`, () => {
    const word = "Not palindrome"
    const result = isPalindrome(word)

    expect(result).toBe(false)
  })
})
