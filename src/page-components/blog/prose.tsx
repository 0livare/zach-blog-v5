import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {textColorClass} from '~/utils'

export type ProseProps = React.HtmlHTMLAttributes<HTMLDivElement>

/**
 * Styles for generated html using @tailwindcss/typography
 */
export function Prose(props: ProseProps) {
  let {className, ...rest} = props

  return (
    <div
      {...rest}
      style={
        {
          '--tw-prose-headings': 'var(--color-text-secondary)',
          // '--tw-prose-bullets': 'var(--color-text-secondary)',
        } as React.CSSProperties
      }
      className={cs(
        className,
        'prose prose-slate dark:prose-invert lg:prose-lg px-4 mx-auto md:px-0 md: pb-8',
        textColorClass('prose-p'),
        textColorClass('prose-li'),
        'prose-img:rounded-lg',
        'prose-code:bg-gray-400/25 dark:prose-code:bg-gray-600/50 prose-code:p-1 prose-code:rounded',
        'prose-a:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-300 prose-a:no-underline hover:prose-a:underline',
      )}
    />
  )
}
