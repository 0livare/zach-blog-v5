import React from 'react'
import {useImmer, type Updater} from 'use-immer'

import type {Word, Tile} from '~/page-components'

export const getEmptyTile = (): Tile => ({letter: '', state: 'wrong'})

export function useWordleWords(): [Word[], Updater<Word[]>] {
  const [words, setWords] = useImmer<Word[]>(Array(6).fill(Array(5).fill(getEmptyTile())))

  React.useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      let key = e.key.toLowerCase()

      let letterCount = words.flat(1).filter((x) => x.letter).length
      let wordIndex = Math.floor(letterCount / 5)
      let letterIndex = letterCount % 5

      if (key === 'backspace') {
        // Don't allow delete with no letters
        if (wordIndex + letterIndex === 0) return

        // Go back to the previous word
        if (letterIndex === 0) {
          wordIndex--
          letterIndex = 5
        }

        if (letterIndex === 0) return
        setWords((words) => {
          words[wordIndex][letterIndex - 1] = {letter: '', state: 'wrong'}
        })
        return
      }

      // Stop at the max letter count
      if (letterCount === 5 * 6) return

      if (key.match(/^[a-z]$/)) {
        setWords((words) => {
          let tile = words[wordIndex][letterIndex]
          tile.letter = key
        })
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  })

  return [words, setWords]
}
