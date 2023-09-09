import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

export type SrOnlyProps = React.ComponentProps<'span'>

/**
 * This component allows rendering something that is only visible
 * to screen readers or other automated processes that are reading
 * the site (e.g. search engine crawlers).
 *
 * It also has a bonus feature in development mode: if you press
 * the Alt key (Option on Mac), the hidden contents will be revealed.
 * This allows sighted developers to quickly and easily check what
 * the hidden contents is.
 */
export const SrOnly = React.forwardRef(function SrOnly(props: SrOnlyProps, ref: React.Ref<any>) {
  const {children, className, ...rest} = props

  const [forceShow, setForceShow] = React.useState(false)

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production') return

    function handleKeyDown(ev: KeyboardEvent) {
      if (ev.key === 'Alt') setForceShow(true)
    }
    function handleKeyUp(ev: KeyboardEvent) {
      if (ev.key === 'Alt') setForceShow(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <span
      {...rest}
      ref={ref}
      className={cs('SrOnly', 'sr-only', forceShow && 'not-sr-only', className)}
    >
      {children}
    </span>
  )
})
