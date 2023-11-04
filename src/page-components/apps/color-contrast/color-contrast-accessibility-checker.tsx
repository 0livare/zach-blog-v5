import React from 'react'
import Color from 'color'
import {twMerge} from 'tailwind-merge'
import {Icon, IconButton} from '~/components'

function isValidColor(color: string) {
  try {
    Color(color)
    return true
  } catch {
    return false
  }
}

function safeColor(color: Parameters<typeof Color>[0]) {
  try {
    return Color(color)
  } catch {
    return null
  }
}

const stripeBackgroundImage =
  'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)'

export function ColorContrastAccessibilityChecker(props: React.ComponentProps<'div'>) {
  const [colors, setColors] = React.useState(['#ff0000', '#00ff00', '#0000ff'])
  const finalColor = React.useMemo(() => calculateFinalColor(colors), [colors])

  return (
    <div {...props}>
      {colors.map((color, index) => (
        <Layer
          key={index}
          color={color}
          index={index}
          length={colors.length}
          onColorChange={(i, color) => {
            setColors((prev) => {
              const next = [...prev]
              next[i] = color
              return next
            })
          }}
        />
      ))}

      <div
        className="h-[200px] w-full"
        style={{
          backgroundColor: finalColor,
          color: safeColor(finalColor)?.isDark() ? 'white' : 'black',
        }}
      >
        <h2>Final Color {finalColor}</h2>
      </div>
    </div>
  )
}

function Layer(props: any) {
  const {color, index, onColorChange, className, length, ...rest} = props
  const isColorValid = isValidColor(color)

  function heightForIndex(index: number) {
    return (length - index) * 60 + 50
  }

  const thisHeight = heightForIndex(index)
  const prevIndices = Array.from({length: index}, (_, i) => i)
  const heightToMove = prevIndices.reduce((acc, i) => acc + heightForIndex(i) - 50, 0)

  return (
    <div
      {...rest}
      className={twMerge('p-2', className)}
      style={{
        marginTop: index * 8,
        marginLeft: index * 16,
        width: `calc(100% - ${16 * 2 * index}px)`,
        backgroundColor: color,
        backgroundImage: isColorValid ? undefined : stripeBackgroundImage,
        transform: index == 0 ? 0 : `translateY(-${heightToMove}px)`,
        height: thisHeight,
        position: 'relative',
        // position: index === 0 ? 'relative' : 'absolute',
      }}
    >
      <input
        type="text"
        value={color}
        onChange={(e) => onColorChange(index, e.target.value)}
        className="bg-white/60 text-slate-800"
      />

      {index === length - 1 && (
        <div className="absolute bottom-0 right-0">
          <IconButton>
            <Icon name="Trash" />
          </IconButton>
          <IconButton>
            <Icon name="Plus" />
          </IconButton>
        </div>
      )}
    </div>
  )
}

type MaybeAlphaRgb = {r: number; g: number; b: number; alpha?: number}
type RGBObj = Required<MaybeAlphaRgb>

function calculateFinalColor(colors: string[]) {
  const rgbas = colors
    .map((color) => {
      const obj = safeColor(color)?.rgb().object() as MaybeAlphaRgb | null
      if (!obj) return null
      if (obj.alpha) return obj as RGBObj
      return {...obj, alpha: 1} as RGBObj
    })
    .filter(Boolean) as RGBObj[]

  const visibleAlphas = rgbas.map((rgba, index, array) => {
    let visibleAlpha = rgba.alpha
    if (index < array.length - 1) {
      visibleAlpha = 1 - array[index + 1].alpha
    }
    return {...rgba, alpha: visibleAlpha}
  })

  const finalColor = visibleAlphas
    .map((rgba) => ({
      r: rgba.r * rgba.alpha,
      g: rgba.g * rgba.alpha,
      b: rgba.b * rgba.alpha,
    }))
    .reduce((acc, curr) => ({
      r: acc.r + curr.r,
      g: acc.g + curr.g,
      b: acc.b + curr.b,
    }))

  return safeColor(finalColor)?.rgb().string()
}
