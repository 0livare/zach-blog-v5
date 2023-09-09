import {HtmlHTMLAttributes, RefObject} from 'react'

import {twMerge as cs} from 'tailwind-merge'
import {Icon} from '../icon'
import {IconButton} from '../icon-button'
import {useOverflowCarouselContext} from './context'

export function OverflowArrowButton(props: OverflowArrowButtonProps) {
  const {direction, scrollerRef, className, ...rest} = props
  const context = useOverflowCarouselContext()

  function handleClick() {
    const modifier = direction === 'right' ? 1 : -1
    scrollerRef.current!.scrollLeft += modifier * context.childWidth
  }

  return (
    <div
      className={cs(
        'OverflowArrowButton',
        'absolute top-0 bottom-0 my-auto',
        direction === 'left' && 'left-0',
        direction === 'right' && 'right-0',
        'relative leading-[0] z-10 hidden md:block',
        className,
      )}
    >
      <IconButton {...rest} tabIndex={-1} onClick={handleClick}>
        <Icon name={direction === 'left' ? 'arrow-left' : 'arrow-right'} color="currentColor" />
      </IconButton>
    </div>
  )
}

export type OverflowArrowButtonProps = HtmlHTMLAttributes<HTMLElement> & {
  direction: 'left' | 'right'
  scrollerRef: RefObject<HTMLElement>
}
