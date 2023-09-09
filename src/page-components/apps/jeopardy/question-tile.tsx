import React from 'react'

import {twMerge as cs} from 'tailwind-merge'

// The keys of this object are the states that a game tile
// can be in, and the values of this object are the score
// multiplier that is applied to this tile's value when
// it is in that state.
type GameTileState = 'ready' | 'unanswered' | 'correct' | 'incorrect'
let gameTileStateOrder: GameTileState[] = ['ready', 'unanswered', 'correct', 'incorrect']
let tileStates: Record<GameTileState, number> = {
  ready: 0,
  unanswered: 0,
  correct: 1,
  incorrect: -1,
}

export type QuestionTileProps = React.ComponentProps<'button'> & {
  value: number
  updateScore(oldScore: number, newScore: number, round: number): void
  round: number
}

export function QuestionTile(props: QuestionTileProps) {
  let {value, updateScore, round, className, ...rest} = props

  const [state, setState] = React.useState(gameTileStateOrder[0])
  const [score, setScore] = React.useState(0)

  function handleClick() {
    let index = gameTileStateOrder.indexOf(state)
    let newIndex = (index + 1) % gameTileStateOrder.length

    let newState = gameTileStateOrder[newIndex]
    setState(newState)

    let oldScore = score
    let newScore = value * tileStates[newState]
    updateScore(oldScore, newScore, round)
    setScore(newScore)
  }

  return (
    <button
      {...rest}
      onClick={handleClick}
      className={cs(
        'QuestionTile',
        'w-full block',
        'py-2 flex justify-center cursor-pointer select-none md:px-2 md:text-2xl text-center',
        'text-[#f4c947]',
        (state === 'ready' || state === 'unanswered') &&
          'bg-[#172075] hover:bg-[#172075]/80 dark:hover:bg-[#464fa1]',
        state === 'unanswered' && 'text-zinc-500',
        state === 'correct' && 'text-white bg-green-600 hover:bg-green-400',
        state === 'incorrect' && 'text-white bg-red-700 hover:bg-red-600',
        className,
      )}
    >
      ${value}
    </button>
  )
}
