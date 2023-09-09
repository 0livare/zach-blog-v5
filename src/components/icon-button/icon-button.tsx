import {ButtonHTMLAttributes} from 'react'

import {twMerge as cs} from 'tailwind-merge'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {size?: number | string}

export function IconButton(props: IconButtonProps) {
  let {className, children, style = {}, size = 24, ...rest} = props

  return (
    <button
      className={cs(
        'IconButton',
        'm-0, rounded-full p-[0.4em] border-0 transition-all disabled:cursor-not-allowed',
        'bg-transparent hover:bg-slate-600/20 dark:hover:bg-slate-100/30',
        'active:bg-slate-600/40 dark:active:bg-slate-100/50',
        className,
      )}
      style={{fontSize: size, ...style}}
      {...rest}
    >
      {children}
    </button>
  )
}
