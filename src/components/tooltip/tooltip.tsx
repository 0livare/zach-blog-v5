import React from 'react'
import {usePopperTooltip, type TriggerType, type Config} from 'react-popper-tooltip'
import {twMerge} from 'tailwind-merge'

import {AddProps} from '../add-props'

export type TooltipProps = Omit<React.ComponentProps<'div'>, 'color' | 'title'> & {
  title: any
  children: any
  open?: boolean
  followCursor?: boolean
  triggers?: TriggerType[]
  placement?: Config['placement']
}

/**
 * An automatic popup to display short, helpful text near another element.
 */
export const Tooltip = React.forwardRef(function Tooltip(
  props: TooltipProps,
  ref: React.ForwardedRef<any>,
) {
  const {
    children,
    className,
    title,
    open: forceVisible,
    followCursor,
    triggers,
    placement,
    ...rest
  } = props

  const {getTooltipProps, setTooltipRef, setTriggerRef, visible} = usePopperTooltip({
    delayHide: 100,
    interactive: true,
    trigger: triggers ?? ['hover', 'focus'],
    followCursor: followCursor ?? true,
    offset: [0, 12],
    placement,
  })

  if (!title) return children

  return (
    <>
      <AddProps to={children} ref={setTriggerRef} />
      {(forceVisible ?? visible) && (
        <div
          {...rest}
          ref={(el) => {
            if (el) {
              // @ts-ignore
              if (ref && 'current' in ref) ref.current = el
              setTooltipRef(el)
            }
          }}
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
})
