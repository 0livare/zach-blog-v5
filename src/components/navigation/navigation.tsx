import type {HtmlHTMLAttributes} from 'react'
import {twMerge as cs} from 'tailwind-merge'

import styles from './navigation.module.scss'

export type NavigationProps = HtmlHTMLAttributes<HTMLDivElement> & {
  forceWhiteGlow?: boolean
}

export function Navigation(props: NavigationProps) {
  let {className, forceWhiteGlow, ...rest} = props

  return (
    <nav
      {...rest}
      className={cs(
        'Navigation',
        'absolute top-6 md:top-8 right-8 md:right-12 flex z-20',
        className,
        forceWhiteGlow && styles.forceWhiteGlow,
      )}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/cooking">Cooking</NavLink>
      <NavLink to="/apps">Apps</NavLink>
    </nav>
  )
}

function NavLink(props: {to: string; children: string}) {
  let {to, children} = props

  return (
    <a
      href={to}
      className={cs(
        'NavLink',
        styles.navLink,
        'hover:no-underline font-normal text-slate-800 dark:text-white',
        'mr-8 last:mr-0',
      )}
    >
      {children}
    </a>
  )
}
