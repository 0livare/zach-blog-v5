import React from 'react'
import Color from 'color'
import {twMerge} from 'tailwind-merge'
import {safeParseColor} from './helpers'

export type ColorInputProps = React.ComponentProps<'label'> & {
  color: string
  onChange(value: string)
  label: string
}

export function ColorInput(props: ColorInputProps) {
  const {className, color, onChange, label, ...rest} = props

  return (
    <label {...rest} className={twMerge('relative', className)}>
      <input
        type="text"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white/60 text-slate-800 w-64 max-w-full"
      />

      <input
        type="color"
        className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4"
        value={safeParseColor(color)?.hex().toString() ?? '#000000'}
        onChange={(e) => onChange(e.target.value)}
      />

      <span className="sr-only">{label}</span>
    </label>
  )
}
