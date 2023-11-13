import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

export type TitleProps = React.ComponentProps<'h1'>

export function Title(props: TitleProps) {
  let {children, className, style = {}, ...rest} = props

  return (
    <h1
      {...rest}
      className={cs(
        'Title',
        'font-serif text-4xl md:text-7xl font-bold mb-3 md:mb-5 text-center uppercase',
        'max-w-2xl text-center mx-auto',
        className,
      )}
      style={{color: 'var(--color-text-primary)', ...style}}
    >
      {children}
    </h1>
  )
}
