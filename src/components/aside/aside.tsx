import React from 'react'

import {twMerge as cs} from 'tailwind-merge'
import {Icon, type IconProps} from '../icon'
import styles from './aside.module.scss'

export type AsideProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  variant?: 'info' | 'warn' | 'error' | 'gray'
  iconName?: IconProps['name']
}

export function Aside(props: AsideProps) {
  let {children, variant = 'info', className, iconName, ...rest} = props
  return (
    <aside
      {...rest}
      className={cs(
        'Aside',
        'relative rounded-md border-l-4 md:-mx-9',
        'py-7 pl-7 pr-5 md:px-8',
        styles.rmvParagraphMarginY,
        variant === 'info' && ' bg-blue-200/50   border-blue-600    dark:bg-blue-900/50',
        variant === 'warn' && ' bg-orange-100 border-yellow-500  dark:bg-yellow-800/50',
        variant === 'error' && 'bg-red-100/90  border-red-600 dark:bg-red-900/50',
        variant === 'gray' &&
          'bg-gray-200 border-gray-500 dark:border-gray-100 dark:bg-gray-900/50',
        className,
      )}
    >
      <div className={'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 p-3 w-14 h-14'}>
        {/* Cut the corner off of the colored background */}
        <div
          className={'absolute top-0 left-0 w-full h-full rounded-full'}
          style={{
            background: 'var(--color-bg-primary)',
            clipPath: `polygon(40% 50%, 100% 50%, 100% 100%, 40% 100%)`,
          }}
        />

        <Icon
          name={iconName || getIconName(variant)}
          size={32}
          className={cs(
            'relative',
            variant === 'info' && 'text-blue-600 dark:text-blue-600',
            variant === 'warn' && 'text-yellow-500 dark:text-yellow-500',
            variant === 'error' && 'text-red-600 dark:text-red-600',
            variant === 'gray' && 'text-gray-500 dark:text-gray-100',
          )}
        />
      </div>
      {children}
    </aside>
  )
}

function getIconName(variant: AsideProps['variant']): IconProps['name'] {
  switch (variant) {
    case 'info':
      return 'info'
    case 'warn':
      return 'alert-triangle'
    case 'error':
      return 'x'
    case 'gray':
      return 'coffee'
    default:
      return 'info'
  }
}
