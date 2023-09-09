import type {ComponentProps} from 'react'
import {twMerge as cs} from 'tailwind-merge'

/**
 * A single slide inside an Overflow Carousel
 */
export function OverflowCarouselSlide(props: ComponentProps<'div'>) {
  let {className, ...rest} = props

  return (
    <div
      className={cs(
        'OverflowCarouselSlide',
        'snap-always snap-center',
        'inline flex-shrink-0 h-full max-w-[90%]',
        className,
      )}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      {...rest}
    />
  )
}
