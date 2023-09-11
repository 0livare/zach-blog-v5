import type {ComponentProps} from 'react'
import {twMerge as cs} from 'tailwind-merge'

export type BlogListProps = ComponentProps<'div'> & {}

export function BlogList(props: BlogListProps) {
  const {children, className, ...rest} = props

  return (
    <ol
      className={cs('BlogList list-none', 'flex flex-wrap justify-center gap-8 pb-72', className)}
    >
      {children}
    </ol>
  )
}
