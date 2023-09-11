import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

import styles from './neon-text.module.scss'

export type NeonTextProps = React.ComponentProps<'div'> & {
  component?: string
}

export function NeonText(props: NeonTextProps) {
  let {component: Component = 'h1', className, ...rest} = props
  // @ts-ignore
  return <Component {...rest} className={cs('NeonText', styles.root, className)} />
}
