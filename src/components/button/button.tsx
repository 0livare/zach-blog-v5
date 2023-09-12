import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

import styles from './button.module.scss'

export type ButtonProps = React.ComponentProps<'button'> & {
  href?: string
  download?: boolean
}

export function Button(props: ButtonProps) {
  let {className, style = {}, href, ...rest} = props
  let Component = (href ? 'a' : 'button') as any

  return (
    <Component
      {...rest}
      style={
        {
          '--ripple-color': 'var(--teal-soft)',
          borderColor: 'var(--teal-dark)',
          ...style,
        } as React.CSSProperties
      }
      className={cs(
        'Button',
        styles.ripple,
        'min-h-[50px] border-2 px-3 outline-none cursor-pointer disabled:cursor-no-drop disabled:opacity-50',
        'text-black dark:text-white',
        'inline-flex justify-center items-center',
        'hover:no-underline',
        className,
      )}
      href={href}
    />
  )
}
