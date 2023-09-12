import React from 'react'
import type {Updater} from 'use-immer'
import {twMerge as cs} from 'tailwind-merge'

type TileState = 'wrong' | 'moved' | 'correct'
const tileStates: TileState[] = ['wrong', 'moved', 'correct']

export type Tile = {letter: string; state: TileState}
export type Word = [Tile, Tile, Tile, Tile, Tile]

export type GameRowProps = React.ComponentProps<'div'> & {
  words: Word[]
  setWords: Updater<Word[]>
  wordIndex: number
}

export function GameRow(props: GameRowProps) {
  const {className, words, setWords, wordIndex, ...rest} = props
  const word = words[wordIndex]
  const strWord = word.map((tile) => tile.letter).join('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  function openKeyboard() {
    inputRef.current?.focus()
  }

  return (
    <div
      {...rest}
      className={cs('GameRow', 'relative flex gap-2 md:gap-4', className)}
      aria-label={strWord}
    >
      {/* This input exists to allow mobile and tablet users to get the keyboard to pop up */}
      <input
        type="text"
        className="text-xl absolute t-0 l-0 sr-only"
        ref={inputRef}
        tabIndex={-1}
      />

      {word.map((tile, index) => (
        <GameTile
          key={index}
          wordIndex={wordIndex}
          tileIndex={index}
          words={words}
          setWords={setWords}
          openKeyboard={openKeyboard}
        >
          {tile.letter}
        </GameTile>
      ))}
    </div>
  )
}

type GameTileProps = React.ComponentProps<'button'> & {
  words: Word[]
  setWords: Updater<Word[]>
  wordIndex: number
  tileIndex: number
  openKeyboard(): void
}

function GameTile(props: GameTileProps) {
  const {className, children, words, setWords, wordIndex, tileIndex, openKeyboard, ...rest} = props
  const rootRef = React.useRef<HTMLButtonElement>(null)
  const {state} = words[wordIndex][tileIndex]

  function pulseTile() {
    rootRef.current?.animate([{transform: 'scale(1.2)'}, {transform: 'scale(1)'}], {
      duration: 150,
    })
  }

  React.useEffect(() => {
    if (!children) return
    pulseTile()
  }, [children])

  function handleClick() {
    if (children) {
      pulseTile()
      setWords((words) => {
        let tile = words[wordIndex][tileIndex]
        let nextIndex = (tileStates.indexOf(tile.state) + 1) % tileStates.length
        tile.state = tileStates[nextIndex]
      })
    } else {
      openKeyboard()
    }
  }

  return (
    <button
      {...rest}
      ref={rootRef}
      className={cs(
        'GameTile',
        'w-10 h-10 md:w-14 md:h-14 border border-gray-600',
        'text-3xl uppercase font-bold',
        'grid place-content-center',
        'transition-transform delay-75',
        state === 'moved' && 'bg-yellow-500 dark:bg-yellow-600 text-white',
        state === 'correct' && 'bg-green-600 dark:bg-green-700 text-white',
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
