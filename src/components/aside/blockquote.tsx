import type React from 'react'
import {twMerge as cs} from 'tailwind-merge'

export function BlockQuote(props: React.ComponentProps<'blockquote'>) {
  const {className, ...rest} = props
  return (
    <blockquote {...rest} className={cs('border-l-2 border-slate-700 dark:border-slate-400')} />
  )
}
