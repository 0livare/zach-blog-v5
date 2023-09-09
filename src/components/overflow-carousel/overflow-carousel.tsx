import React from 'react'
import {twMerge as cs} from 'tailwind-merge'

import {useDrag, useDimension} from '~/hooks'
import {mergeRefs} from '~/utils'
import {OverflowArrowButton} from './overflow-arrow-button'
import {OverflowCarouselSlide} from './overflow-carousel-slide'
import {OverflowCarouselContext} from './context'

export type OverflowCarouselProps = React.ComponentProps<'div'> & {
  children: React.ReactNode
  /** The index of the slide that should be shown on page load */
  initialIndex?: number
  /** Class names passed to each element rendered by the carousel */
  classes?: {
    root?: string
    scrollContainer?: string
  }
}

// TODO: Handle this more elegantly with a prop
// Could possibly use CSS vars and pull the value from there when it's needed in the JS
const GAP = 32 // px

/**
 * The Overflow Carousel is a row of items that can be swiped/scrolled
 * through when they no longer fit on the screen. On Desktop, the content
 * of the Overflow Carousel will usually be fully visible on the page.
 * On mobile devices though, the content can be swiped through one item
 * at a time.
 */
const OverflowCarousel = React.forwardRef(function OverflowCarousel(
  props: OverflowCarouselProps,
  ref: React.Ref<any>,
) {
  const {children, className, classes = {}, initialIndex, ...rest} = props

  const rootRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLDivElement>(null)

  const [dragEvents, dragStyles] = useDrag(scrollerRef)
  const [childWidth, setChildWidth] = React.useState(0)
  const [scrollerElClientWidth] = useDimension(scrollerRef, (el) => el.clientWidth)

  const hasHorizontalScrollbar =
    Number(scrollerRef.current?.scrollWidth) > Number(scrollerElClientWidth)

  // Scroll to initialIndex
  React.useEffect(() => {
    const children = scrollerRef.current!.childNodes
    if (!children.length || initialIndex == null) return

    let totalWidth = 0
    let realIndex = initialIndex >= 0 ? initialIndex : initialIndex + children.length

    for (let i = 0; i < Math.min(realIndex, children.length); ++i) {
      const child = children[i] as HTMLElement
      totalWidth += child.getBoundingClientRect().width
      totalWidth += GAP
    }

    scrollerRef.current!.scrollLeft = totalWidth
  }, [initialIndex])

  // Find the child width
  // Note: This only looks at the first child and assumes that all
  // others have the same width.
  React.useEffect(() => {
    const children = scrollerRef.current!.childNodes
    if (!children.length) return

    const firstChild = children[0] as HTMLElement
    setChildWidth(firstChild.getBoundingClientRect().width)
  }, [])

  return (
    <div
      {...rest}
      ref={mergeRefs(ref, rootRef)}
      className={cs(
        'OverflowCarousel',
        'relative flex justify-center gap-4',
        'isolate',
        className,
        classes.root,
      )}
    >
      <OverflowCarouselContext.Provider value={{childWidth}}>
        {hasHorizontalScrollbar && (
          <OverflowArrowButton direction="left" scrollerRef={scrollerRef} />
        )}

        <div
          ref={scrollerRef}
          {...dragEvents}
          style={{WebkitOverflowScrolling: 'touch', ...dragStyles, gap: GAP}}
          className={cs(
            'inline-flex',
            'snap-x snap-mandatory overflow-x-auto overflow-y-hidden',
            'scrollbar-hide',
            'px-4',
            classes.scrollContainer,
          )}
        >
          {children}
        </div>

        {hasHorizontalScrollbar && (
          <OverflowArrowButton direction="right" scrollerRef={scrollerRef} />
        )}
      </OverflowCarouselContext.Provider>
    </div>
  )
})

const O = OverflowCarousel as typeof OverflowCarousel & {
  Slide: typeof OverflowCarouselSlide
}
O.Slide = OverflowCarouselSlide
export {O as OverflowCarousel}
