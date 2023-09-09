import type {Updater} from 'use-immer'
import {twMerge as cs} from 'tailwind-merge'

import {getEmptyTile} from './use-wordle-words'
import type {Word} from './game-row'

export type PossibleSolutionWordProps = React.ComponentProps<'button'> & {
  children: string
  setWords: Updater<Word[]>
}

export function PossibleSolutionWord(props: PossibleSolutionWordProps) {
  const {children: word, className, setWords, ...rest} = props
  const solvedLetters = word.split('')

  function autoPopulateWord() {
    let word: Word = [
      getEmptyTile(),
      getEmptyTile(),
      getEmptyTile(),
      getEmptyTile(),
      getEmptyTile(),
    ]

    word.forEach((tile, index) => {
      tile.letter = solvedLetters[index]
    })

    setWords((words) => {
      let emptyWordIndex = words.findIndex((word) => word[0].letter === '')
      if (emptyWordIndex < 0) return
      words[emptyWordIndex] = word
    })
  }

  return (
    <button
      {...rest}
      className={cs(
        'PossibleSolutionWord',
        'inline-flex items-center justify-center gap-2',
        className,
      )}
      aria-label={word}
      onClick={autoPopulateWord}
    >
      {solvedLetters.map((solvedLetter, index) => (
        <span
          key={index}
          className={cs(
            'w-10 h-10 border border-gray-600',
            'inline-flex items-center justify-center',
            'text-xl uppercase font-bold',
          )}
        >
          {solvedLetter}
        </span>
      ))}
    </button>
  )
}
