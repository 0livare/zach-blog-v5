import type {ComponentProps} from 'react'
import {twMerge as cs} from 'tailwind-merge'
import styles from './recipe-card.module.scss'

export type RecipeCardProps = ComponentProps<'a'> & {
  to?: string
  src: string | undefined
  title: string
}

export function RecipeCard(props: RecipeCardProps) {
  const {src, title, className, to, ...rest} = props

  return (
    <a
      {...rest}
      href={to}
      className={cs(
        'w-80 h-72 relative block bg-no-repeat bg-center bg-cover rounded-lg ',
        'shadow-lg hover:shadow-xl transition-shadow ease-in-out',
        'transition-transform hover:scale-105 duration-500',
        className,
      )}
      style={{backgroundImage: `url(${src})`}}
    >
      <div
        className={`absolute bottom-0 w-full px-4 pb-4 pt-16 rounded-lg bg-gradient-to-t from-white/70 to-transparent text-stone-800 ${styles.textStroke}`}
      >
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
    </a>
  )
}
