import React from 'react'

import {QuestionTile, type QuestionTileProps} from './question-tile'

export type QuestionRowProps = React.ComponentProps<'tr'> &
  QuestionTileProps & {
    colCount: number
  }

/**
 * This is a row that contains multiple cells, all of which
 * contain the same dollar value.  These cells represent
 * the questions for that value across all the categories
 */
export function QuestionRow(props: QuestionRowProps) {
  let {className, style, colCount, ...rest} = props

  return (
    <tr className={className} style={style}>
      {Array.from({length: colCount}).map((_, index) => (
        <td key={index}>
          <QuestionTile {...rest} />
        </td>
      ))}
    </tr>
  )
}
