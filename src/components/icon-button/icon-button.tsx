import React from 'react'
import {twMerge as cs} from 'tailwind-merge'
import styles from './icon-button.module.scss'

export type IconButtonProps = React.ComponentProps<'button'> & {
  size?: number | string
  hoverColor?: string
}

export function IconButton(props: IconButtonProps) {
  let {className, children, style = {}, size = 24, hoverColor, ...rest} = props

  return (
    <button
      className={cs(
        'IconButton',
        'm-0, rounded-full p-[0.4em] border-0 transition-all disabled:cursor-not-allowed',
        'bg-transparent hover:bg-slate-600/20 dark:hover:bg-slate-100/30',
        'active:bg-slate-600/40 dark:active:bg-slate-100/50',
        hoverColor && styles.overrideHover,
        className,
      )}
      style={{fontSize: size, ...style, '--iconBtnHoverBgColor': hoverColor} as React.CSSProperties}
      {...rest}
    >
      {children}
    </button>
  )
}
