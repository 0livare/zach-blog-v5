import React, {HtmlHTMLAttributes} from 'react'

import {CategoryTile} from './category-tile'

export type CategoryRowProps = HtmlHTMLAttributes<HTMLTableRowElement> & {
  colCount: number
}

export function CategoryRow(props: CategoryRowProps) {
  let {colCount, className} = props

  return (
    <tr className={className}>
      {Array.from({length: colCount}).map((_, index) => (
        <th key={index} className="bg-[#172075]">
          <CategoryTile />
        </th>
      ))}
    </tr>
  )
}
