export function rankWordList(wordList: string[]) {
  let letterFrequency = wordList.reduce(
    (accum, word) => {
      let letters = word.split('')
      for (let letter of letters) {
        if (accum[letter]) {
          accum[letter]++
        } else {
          accum[letter] = 1
        }
      }
      return accum
    },
    {} as Record<string, number>,
  )

  let wordScores = wordList.reduce(
    (accum, word) => {
      // Use a set because having two e's doesn't make a word
      // more valuable than a different word that only has
      // a single e
      let letters = new Set(word.split(''))
      let wordScore = 0

      letters.forEach((letter) => {
        wordScore += letterFrequency[letter]
      })

      accum[word] = wordScore
      return accum
    },
    {} as Record<string, number>,
  )

  let copy = [...wordList]
  copy.sort((wordA, wordB) => wordScores[wordB] - wordScores[wordA])
  return copy
}
