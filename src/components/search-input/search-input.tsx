import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {Icon} from '../icon'

export type SearchInputProps = React.ComponentProps<'div'> & {
  searchText: string
  setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export function SearchInput(props: SearchInputProps) {
  const {className, searchText, setSearchText, ...rest} = props

  const [isTyping, setIsTyping] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const rootRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (isTyping) inputRef.current?.focus()
  }, [isTyping])

  return (
    <div
      {...rest}
      className={cs(
        'SearchInput',
        'rounded-full border-2 border-blue-600 dark:border-teal w-36 transition-all duration-500',
        isTyping && 'w-80',
        'flex items-center',
        className,
      )}
      ref={rootRef}
    >
      <div
        className={cs(
          'transition-all duration-500 h-full text-black dark:text-white w-0 overflow-hidden',
          isTyping && 'w-full',
          'flex',
        )}
      >
        <input
          type="text"
          className={cs('bg-transparent h-full text-inherit p-2 flex-1 outline-none')}
          ref={inputRef}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onBlur={() => {
            if (!searchText && !rootRef.current?.contains(document.activeElement)) {
              setIsTyping(false)
            }
          }}
        />
        <button
          onClick={() => {
            setSearchText('')
            inputRef.current?.focus()
          }}
          className="flex-none hover:bg-blue-300 dark:hover:bg-teal-soft w-6 h-6 rounded-full flex justify-center items-center my-auto"
        >
          <Icon name="x" />
        </button>
      </div>
      <button
        className={cs(
          'w-full h-full p-2  hover:bg-blue-300 dark:hover:bg-teal-soft disabled:bg-transparent rounded-full text-inherit',
          isTyping && 'w-32',
        )}
        onClick={() => setIsTyping(true)}
        disabled={isTyping}
      >
        Search
      </button>
    </div>
  )
}