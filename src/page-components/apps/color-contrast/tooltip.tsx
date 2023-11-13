import React from 'react'
import {usePopper} from 'react-popper'

type TooltipProps = React.ComponentProps<'div'> & {
  anchorRef: React.RefObject<any>
}

export function Tooltip(props: TooltipProps) {
  const {children, anchorRef, ...rest} = props

  const [popperElement, setPopperElement] = React.useState<HTMLDivElement | undefined>(undefined)
  const [arrowElement, setArrowElement] = React.useState<HTMLDivElement | undefined>(undefined)
  const {styles, attributes} = usePopper(anchorRef.current, popperElement, {
    modifiers: [{name: 'arrow', options: {element: arrowElement}}],
  })

  return (
    <div {...rest} ref={setPopperElement as any} style={styles.popper} {...attributes.popper}>
      {children}
      <div ref={setArrowElement as any} style={styles.arrow} />
    </div>
  )
}
