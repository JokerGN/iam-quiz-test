function groupWordsBySameSetOfChar(words) {
  const hash = {}

  words.map(word => {
    const key = word.split('').sort()

    if (hash.hasOwnProperty(key)) {
      hash[key].push(word)
      return 
    }

    hash[key] = [word]
  })

  return hash
}

module.exports = {
  groupWordsBySameSetOfChar
}