import React from 'react'
import {usePopperTooltip, type TriggerType} from 'react-popper-tooltip'

import {AddProps} from '../add-props'
import {twMerge} from 'tailwind-merge'

export type TooltipProps = Omit<React.ComponentProps<'div'>, 'color' | 'title'> & {
  title: any
  children: any
  open?: boolean
  followCursor?: boolean
  triggers?: TriggerType[]
}

/**
 * An automatic popup to display short, helpful text near another element.
 */
export function Tooltip(props: TooltipProps) {
  const {children, className, title, open: forceVisible, followCursor, triggers, ...rest} = props

  const {getTooltipProps, setTooltipRef, setTriggerRef, visible} = usePopperTooltip({
    delayHide: 100,
    interactive: true,
    trigger: triggers ?? ['hover', 'focus'],
    followCursor: followCursor ?? true,
    offset: [0, 12],
  })

  if (!title) return children

  return (
    <>
      <AddProps to={children} ref={setTriggerRef} />
      {(forceVisible ?? visible) && (
        <div
          {...rest}
          ref={setTooltipRef}
          {...getTooltipProps({
            className: twMerge(
              'block bg-gray-800  dark:bg-gray-700 text-white',
              'max-w-sm rounded p-4',
              'break-words font-bold leading-6 text-sm',
              className,
            ),
          })}
        >
          {title}
        </div>
      )}
    </>
  )
}
