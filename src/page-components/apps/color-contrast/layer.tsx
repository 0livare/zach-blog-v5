import React from 'react'
import Color from 'color'
import {twMerge} from 'tailwind-merge'

import {Icon, IconButton} from '~/components'
import {safeParseColor} from './helpers'
import {ColorInput} from './color-input'

export const STICK_OUT_HEIGHT = 66

const stripeBackgroundImage =
  'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)'

export function Layer(props: any) {
  const {color, index, onColorChange, className, length, onAddLayer, onRemoveLayer, ...rest} = props
  const colorObj = safeParseColor(color)
  const isColorValid = !!colorObj
  const accentColor = colorObj?.isDark() ? 'white' : 'black'
  const hoverColor = Color(accentColor).alpha(0.2).rgb().toString()
  const label = index === length - 1 ? 'Text Color' : 'Background Color ' + (index + 1)

  return (
    <div
      {...rest}
      className={twMerge('p-2', className)}
      style={{
        position: 'absolute',
        top: index * STICK_OUT_HEIGHT,
        left: index * 16,
        right: index * 16,
        height: STICK_OUT_HEIGHT * (length - index),
        backgroundColor: color,
        backgroundImage: isColorValid ? undefined : stripeBackgroundImage,
      }}
    >
      <p
        className="text-xs mb-4 md:mb-0  md:absolute md:left-4 md:top-2"
        style={{color: accentColor}}
      >
        {label}
      </p>

      <ColorInput color={color} onChange={(val) => onColorChange(index, val)} label={label} />

      {index === length - 1 && (
        <div className="absolute bottom-0 right-0">
          {length > 2 && (
            <IconButton hoverColor={hoverColor} onClick={() => onRemoveLayer(index)}>
              <Icon name="Trash" color={accentColor} />
            </IconButton>
          )}
          <IconButton hoverColor={hoverColor} onClick={onAddLayer}>
            <Icon name="Plus" color={accentColor} />
          </IconButton>
        </div>
      )}
    </div>
  )
}
