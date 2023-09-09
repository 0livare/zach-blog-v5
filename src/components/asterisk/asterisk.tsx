import type {ComponentProps} from 'react'
import {Tooltip} from '../tooltip'

export type AsteriskProps = ComponentProps<'button'> & {text: string}

export function Asterisk(props: AsteriskProps) {
  const {children, text, ...rest} = props

  // The children are handled separately so that the user can still focus
  // either the children or the asterisk button to see the tooltip
  return (
    <>
      {children && <Tooltip title={text}>{children}</Tooltip>}
      <Tooltip title={text}>
        <button {...rest} type="button">
          <span className="text-tsecondary p-1">*</span>
        </button>
      </Tooltip>
    </>
  )
}
