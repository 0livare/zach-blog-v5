import type {ComponentProps} from 'react'

import {twMerge as cs} from 'tailwind-merge'
import {CategoryRow} from './category-row'
import {QuestionRow, type QuestionRowProps} from './question-row'

export type GameBoardProps = ComponentProps<'div'> & {
  values: number[]
  colCount: QuestionRowProps['colCount']
  updateScore: QuestionRowProps['updateScore']
  round: QuestionRowProps['round']
}

export function GameBoard(props: GameBoardProps) {
  let {values, colCount, updateScore, round, className} = props

  return (
    <table className={cs('GameBoard', 'w-full table-fixed', className)}>
      <thead>
        <CategoryRow colCount={colCount} />
      </thead>
      <tbody>
        {values.map((value) => (
          <QuestionRow
            key={value}
            value={value}
            colCount={colCount}
            updateScore={updateScore}
            round={round}
          />
        ))}
      </tbody>
    </table>
  )
}
