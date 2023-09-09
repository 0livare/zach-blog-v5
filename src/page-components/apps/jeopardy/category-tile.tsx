import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

export function CategoryTile() {
  const [text, setText] = React.useState('')
  const [inEditMode, setInEditMode] = React.useState(true)

  return inEditMode ? (
    <input
      type="text"
      className={cs('CategoryTile', 'max-w-[70%] md:p-1 text-slate-800')}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => setInEditMode(!text)}
      onFocus={(e) => e.target.select()}
    />
  ) : (
    <button
      className={cs('CategoryTile', 'text-white cursor-pointer outline-none bg-transparent')}
      onClick={() => setInEditMode(true)}
    >
      {text}
    </button>
  )
}
