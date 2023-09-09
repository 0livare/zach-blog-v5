import type {ComponentProps} from 'react'
import {twMerge as cs} from 'tailwind-merge'

export type BlogListProps = ComponentProps<'div'> & {}

export function BlogList(props: BlogListProps) {
  const {children, className, ...rest} = props

  return (
    <div
      className={cs(
        'BlogList',
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8 justify-items-center',
        className,
      )}
    >
      {children}
    </div>
  )
}
