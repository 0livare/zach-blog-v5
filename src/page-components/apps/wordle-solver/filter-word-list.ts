import type {Word, Tile} from './game-row'

const aToZ = 'abcdefghijklmnopqrstuvwxyz'

function includesEvery(mustInclude: any[], mustBeIncluded: any[]) {
  return mustBeIncluded.every((v) => mustInclude.includes(v))
}

function notIncludeAny(mustNotInclude: any[], mustBeExcluded: any[]) {
  return !mustBeExcluded.some((v) => mustNotInclude.includes(v))
}

export function filterWordList(allWordsList: string[], typedWords: Word[]) {
  let filterByLetterRegex = createFilterByLetterRegex(typedWords)
  let filteredList = allWordsList.filter((possibleWord) => filterByLetterRegex.test(possibleWord))
  let flatWords = typedWords.flat()

  let allMovedLetters = flatWords
    .filter((typedWord) => typedWord.state === 'moved')
    .map((typedWord) => typedWord.letter)

  filteredList = filteredList.filter((possibleWord) =>
    includesEvery(possibleWord.split(''), allMovedLetters),
  )

  let allWrongLetters = flatWords
    .filter((typedWord) => typedWord.state === 'wrong' && typedWord.letter)
    .map((typedWord) => typedWord.letter)

  filteredList = filteredList.filter((possibleWord) =>
    notIncludeAny(possibleWord.split(''), allWrongLetters),
  )

  return filteredList
}

function createFilterByLetterRegex(typedWords: Word[]) {
  const tilesByLetter = typedWords.reduce(
    (accum, typedWord) => {
      accum[0].push(typedWord[0])
      accum[1].push(typedWord[1])
      accum[2].push(typedWord[2])
      accum[3].push(typedWord[3])
      accum[4].push(typedWord[4])
      return accum
    },
    [[], [], [], [], []] as [Tile[], Tile[], Tile[], Tile[], Tile[]],
  )

  const regexStrsByLetter = tilesByLetter.map((tilesForLetter) => {
    const correctTile = tilesForLetter.find((tile) => tile.state === 'correct')
    if (correctTile) return correctTile.letter

    const movedLetters = tilesForLetter
      .filter((tile) => tile.state === 'moved')
      .map((tile) => tile.letter)

    const validLetters = aToZ.split('').filter((letter) => !movedLetters.includes(letter))
    if (movedLetters.length) return '[' + validLetters.join('') + ']'

    return '[' + aToZ.split('') + ']'
  }) as [string, string, string, string, string]

  return new RegExp(regexStrsByLetter.join(''))
}
