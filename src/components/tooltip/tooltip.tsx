import React from 'react'
import {usePopperTooltip} from 'react-popper-tooltip'

import {AddProps} from '../add-props'

export type TooltipProps = Omit<React.ComponentProps<'div'>, 'color'> & {
  title: string
  children: any
}

/**
 * An automatic popup to display short, helpful text near another element.
 */
export function Tooltip(props: TooltipProps) {
  const {children, title, ...rest} = props

  const {getTooltipProps, setTooltipRef, setTriggerRef, visible} = usePopperTooltip({
    delayHide: 100,
    interactive: true,
    trigger: ['hover', 'focus'],
    followCursor: true,
    offset: [0, 12],
  })

  if (!title) return children

  return (
    <>
      <AddProps to={children} ref={setTriggerRef} />
      {visible && (
        <div
          {...rest}
          ref={setTooltipRef}
          {...getTooltipProps({
            className: [
              'block bg-gray-800  dark:bg-gray-700 text-white',
              'max-w-sm rounded p-4',
              'break-words leading-6 text-sm',
            ].join(' '),
          })}
        >
          {title}
        </div>
      )}
    </>
  )
}
