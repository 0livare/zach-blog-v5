import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

export type SectionTitleProps = React.ComponentProps<'h3'> & {
  children: React.ReactNode
}

export function SectionTitle(props: SectionTitleProps) {
  let {children, className, ...rest} = props

  return (
    <h3
      {...rest}
      className={cs(
        'SectionTitle',
        'text-white bg-navy font-serif uppercase p-5 text-4xl',
        className,
      )}
    >
      {children}
    </h3>
  )
}
