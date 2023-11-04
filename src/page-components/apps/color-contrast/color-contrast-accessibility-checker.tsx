import React from 'react'
import Color from 'color'
import {twMerge} from 'tailwind-merge'
import {Icon, IconButton} from '~/components'

function safeParseColor(color: Parameters<typeof Color>[0]) {
  try {
    return Color(color)
  } catch {
    return null
  }
}

const MAX_COLOR = Number('0xffffffff')
function randomColor() {
  return Math.floor(Math.random() * MAX_COLOR).toString(16)
}

const stripeBackgroundImage =
  'repeating-linear-gradient(45deg, #606dbc, #606dbc 10px, #465298 10px, #465298 20px)'

const stickOutHeight = 66

export function ColorContrastAccessibilityChecker(props: React.ComponentProps<'div'>) {
  const [colors, setColors] = React.useState(['#ff0000', '#00ff00', '#0000ff'])
  const finalColor = React.useMemo(() => calculateImageComposite(colors), [colors])

  function handleAddLayer() {
    setColors((prev) => [...prev, `#${randomColor()}`])
  }

  function handleRemoveLayer(index: number) {
    setColors((prev) => {
      const next = [...prev]
      next.splice(index, 1)
      return next
    })
  }

  return (
    <div {...props}>
      <div style={{height: stickOutHeight * colors.length, position: 'relative'}}>
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
            onAddLayer={handleAddLayer}
            onRemoveLayer={handleRemoveLayer}
          />
        ))}
      </div>

      <div
        className="h-[200px] w-full"
        style={{
          backgroundColor: finalColor,
          color: safeParseColor(finalColor)?.isDark() ? 'white' : 'black',
        }}
      >
        <h2>Final Color {finalColor}</h2>
      </div>
    </div>
  )
}

function Layer(props: any) {
  const {color, index, onColorChange, className, length, onAddLayer, onRemoveLayer, ...rest} = props
  const colorObj = safeParseColor(color)
  const isColorValid = !!colorObj
  const accentColor = colorObj?.isDark() ? 'white' : 'black'
  const hoverColor = Color(accentColor).alpha(0.2).rgb().toString()

  return (
    <div
      {...rest}
      className={twMerge('p-2', className)}
      style={{
        position: 'absolute',
        top: index * stickOutHeight,
        left: index * 16,
        right: index * 16,
        height: stickOutHeight * (length - index),
        backgroundColor: color,
        backgroundImage: isColorValid ? undefined : stripeBackgroundImage,
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
          <IconButton hoverColor={hoverColor} onClick={() => onRemoveLayer(index)}>
            <Icon name="Trash" color={accentColor} />
          </IconButton>
          <IconButton hoverColor={hoverColor} onClick={onAddLayer}>
            <Icon name="Plus" color={accentColor} />
          </IconButton>
        </div>
      )}
    </div>
  )
}

type RGBObj = {r: number; g: number; b: number; alpha: number}

/**
 * Using the Alpha compositing "over" method with premultiplied alpha
 * See: https://en.wikipedia.org/wiki/Alpha_compositing
 */
function calculateImageComposite(colors: string[]) {
  let rgbas = colors
    .map((color) => {
      const obj = safeParseColor(color)?.rgb().object() as RGBObj | null
      if (!obj) return null
      if (obj.alpha) return obj as RGBObj
      return {...obj, alpha: 1} as RGBObj
    })
    .filter(Boolean)
    .filter((rgba) => rgba!.alpha ?? 1 > 0) as RGBObj[]

  const compositeColor = rgbas.reduce((acc, rgba) => {
    const {r, g, b, alpha} = rgba
    const {r: bgR, g: bgG, b: bgB, alpha: bgAlpha} = acc

    return {
      r: compositeOverPremultipliedWithGammaCorrection(r, alpha, bgR),
      g: compositeOverPremultipliedWithGammaCorrection(g, alpha, bgG),
      b: compositeOverPremultipliedWithGammaCorrection(b, alpha, bgB),
      alpha: alpha + bgAlpha * (1 - alpha),
    }
  })

  return safeParseColor(compositeColor)?.rgb().string()
}

/** 2.2 Seems to be the usual value, See: http://www.brucelindbloom.com/index.html?WorkingSpaceInfo.html */
const GAMMA = 1.8

function compositeOverPremultipliedWithGammaCorrection(c: number, alpha: number, bgC: number) {
  return Math.pow(Math.pow(c, GAMMA) + Math.pow(bgC, GAMMA) * (1 - alpha), 1 / GAMMA)
}
