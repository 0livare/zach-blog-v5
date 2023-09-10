import type {HtmlHTMLAttributes} from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {textColorClass} from '~/utils'

export type LayoutProps = HtmlHTMLAttributes<HTMLDivElement> & {
  title: string
}

export function Layout(props: LayoutProps) {
  let {children, className, ...rest} = props

  return (
    <div {...rest} className={cs('Layout', 'relative', textColorClass(), className)}>
      {children}
    </div>
  )
}
