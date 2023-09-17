import type React from 'react'

import styles from './blog-full-width.module.scss'

export function BlogFullWidth(props: React.ComponentProps<'div'>) {
  const {children, className, ...rest} = props
  // These two divs allow this table to break out of the .prose
  // max-width, while remaining centered on any size screen.
  // The 65ch width of .prose is hardcoded in the styles though.
  return (
    <div {...rest} className={`${className} ${styles.root}`}>
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
