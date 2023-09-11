import React from 'react'
import ReactCollapse from 'react-collapse'
import {twMerge as cs} from 'tailwind-merge'

import {Icon} from '../icon'
import styles from './show-more.module.scss'

export type ShowMoreProps = React.ComponentProps<'div'> & {
  /** A noun that gets added to the button label, e.g. "show more fields" or "show less fields" */
  showMoreWhat?: string
  /** Pass classNames to nested elements */
  classes?: {
    root?: string
    childWrapper?: string
    buttonWrapper?: string
    button?: string
  }
  /** ID added to collapsible area for screen reader accessibility */
  id: string
}

/**
 * A component that lets the user show or hide some of a group of elements
 */
export function ShowMore(props: ShowMoreProps) {
  const {children, className, showMoreWhat, classes = {}, id, ...rest} = props
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div {...rest} className={cs('ShowMore', className, classes.root)}>
      <ReactCollapse.Collapse
        isOpened={isOpen}
        theme={{collapse: styles.collapse, content: cs(classes.childWrapper, 'pb-2')}}
        id={id}
        aria-hidden={!isOpen}
      >
        {children}
      </ReactCollapse.Collapse>
      <button
        className={cs(
          classes.button,
          'flex justify-between items-center',
          'rounded-full hover:bg-black/5 dark:hover:bg-white/5 px-3 py-2 -ml-3 font-bold text-base text-tsecondary',
        )}
        onClick={() => setIsOpen((open) => !open)}
        data-action="disclosure"
        aria-controls={id}
        aria-expanded={isOpen}
      >
        <span>
          {`Show ${isOpen ? 'less' : 'more'}`}
          {showMoreWhat && ' '}
          {showMoreWhat}
        </span>
        <span
          className={cs('ml-1 -mr-1', 'transition-transform duration-500', isOpen && 'rotate-180')}
        >
          <Icon name="ChevronDown" size="1.5em" className="text-inherit" color={null} />
        </span>
      </button>
    </div>
  )
}
