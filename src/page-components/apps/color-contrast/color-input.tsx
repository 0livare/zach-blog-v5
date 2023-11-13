import React from 'react'
import Color from 'color'
import {twMerge} from 'tailwind-merge'
import {ChromePicker} from 'react-color'

import {safeParseColor} from './helpers'
import {Tooltip} from '~/components'

export type ColorInputProps = React.ComponentProps<'label'> & {
  color: string
  onChange(value: string)
  label: string
}

export function ColorInput(props: ColorInputProps) {
  const {className, color, onChange, label, ...rest} = props
  const [open, setOpen] = React.useState<boolean | undefined>(false)

  return (
    <label {...rest} className={twMerge('relative', className)}>
      <Tooltip
        // open={open}
        className="z-10"
        followCursor={false}
        triggers={['focus']}
        title={
          <ChromePicker
            color={safeParseColor(color)?.rgb() ?? '#000000'}
            onChange={(color) => {
              const obj = Color(color.hex).alpha(color.rgb.a)
              if (color.source === 'rgb') {
                onChange(obj.rgb().toString())
              } else if (color.source === 'hex') {
                onChange(obj.hex().toString())
              } else if (color.source === 'hsl') {
                onChange(obj.hsl().toString())
              } else {
                onChange(obj.hsv().toString())
              }
            }}
          />
        }
      >
        <input
          type="text"
          value={color}
          onChange={(e) => onChange(e.target.value)}
          className="bg-white/60 text-slate-800 w-64 max-w-full"
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(undefined)}
        />
      </Tooltip>

      <span className="sr-only">{label}</span>
    </label>
  )
}
