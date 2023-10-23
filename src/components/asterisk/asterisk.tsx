import type {ComponentProps} from 'react'
import {Tooltip} from '../tooltip'

export type AsteriskProps = ComponentProps<'button'> & {tooltip?: any; contents?: any}

export function Asterisk(props: AsteriskProps) {
  const {children, tooltip, contents, ...rest} = props

  // Give the caller the ability to pass either the tooltip text or the text
  // that is to be wrapped with the asterisk as the children prop. This is
  // beneficial in MDX when the tooltip text is complicated and you would like
  // to write it with MDX, but the astrisked text is simple and can just be
  // a string.
  const tooltipText = tooltip || children
  const astriskedText = contents || children

  // The astriskedText is handled separately so that the user can still focus
  // either the astriskedText or the asterisk button itself to open the tooltip
  return (
    <>
      {astriskedText && <Tooltip title={tooltipText}>{astriskedText}</Tooltip>}
      <Tooltip title={tooltipText}>
        <button {...rest} type="button">
          <span className="text-tsecondary p-1">*</span>
        </button>
      </Tooltip>
    </>
  )
}
