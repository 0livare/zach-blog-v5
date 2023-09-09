import {HtmlHTMLAttributes} from 'react'
import {twMerge as cs} from 'tailwind-merge'

export type TitleProps = HtmlHTMLAttributes<HTMLHeadingElement>

export function Title(props: TitleProps) {
  let {children, className, style = {}, ...rest} = props

  return (
    <h1
      className={cs(
        'Title',
        'font-serif text-4xl md:text-7xl font-bold mb-3 md:mb-5 text-center uppercase',
        className,
      )}
      style={{color: 'var(--color-text-primary)', ...style}}
      {...rest}
    >
      {children}
    </h1>
  )
}
