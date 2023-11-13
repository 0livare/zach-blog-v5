import React from 'react'
import Color from 'color'
import {twMerge} from 'tailwind-merge'
import ChromePicker from 'react-color'

import {safeParseColor} from './helpers'
import {Tooltip} from '~/components'
import {useIsMobile} from '~/hooks'

export type ColorInputProps = React.ComponentProps<'label'> & {
  color: string
  onChange(value: string)
  label: string
}

export function ColorInput(props: ColorInputProps) {
  const {className, color, onChange, label, ...rest} = props
  const [open, setOpen] = React.useState<boolean | undefined>(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const tooltipRef = React.useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const colorObj = safeParseColor(color)?.rgb().object()
  // @ts-ignore
  if (colorObj) colorObj.a = colorObj?.alpha

  React.useEffect(() => {
    function handleClick(e: MouseEvent) {
      const clickedInput = inputRef.current?.contains(e.target as any)
      const clickedTooltip = tooltipRef.current?.contains(e.target as any)
      const shouldClose = !clickedInput && !clickedTooltip
      if (shouldClose) setOpen(false)
    }

    document.body.addEventListener('click', handleClick)
    return () => document.body.removeEventListener('click', handleClick)
  })

  return (
    <label {...rest} className={twMerge('relative', className)}>
      <Tooltip
        open={open}
        className="z-10"
        followCursor={false}
        triggers={['focus']}
        ref={tooltipRef}
        title={
          // @ts-ignore
          <ChromePicker
            color={colorObj}
            onChange={(color) => {
              const obj = Color(color.hex).alpha(color.rgb.a)
              const nextColorStr = obj[color.source]().toString()
              onChange(nextColorStr)
            }}
          />
        }
        placement={isMobile ? 'auto' : 'right-start'}
      >
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="bg-white/60 text-slate-800 w-64 max-w-full"
          onFocus={() => setOpen(true)}
          ref={inputRef}
        />
      </Tooltip>

      <span className="sr-only">{label}</span>
    </label>
  )
}
