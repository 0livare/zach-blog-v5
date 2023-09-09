import type {HtmlHTMLAttributes} from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {textColorClass} from '~/utils'
import {Navigation} from '../navigation'

export type LayoutProps = HtmlHTMLAttributes<HTMLDivElement> & {
  title: string
  forceWhiteNavGlow?: boolean
}

export function Layout(props: LayoutProps) {
  let {children, className, forceWhiteNavGlow, ...rest} = props

  return (
    <div {...rest} className={cs('Layout', 'relative', textColorClass(), className)}>
      <Navigation forceWhiteGlow={forceWhiteNavGlow} />
      {children}
    </div>
  )
}
