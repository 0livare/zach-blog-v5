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
  const [colors, setColors] = React.useState(['#fff', 'rgb(0, 0, 0, 0.5)'])
  const bgColor = React.useMemo(() => calculateImageComposite(colors.slice(0, -1)), [colors])
  const textColor = React.useMemo(() => calculateImageComposite(colors), [colors])
  const bgColorStr = bgColor?.rgb().string()
  const textColorStr = textColor?.rgb().string()
  const contrast = React.useMemo(() => {
    if (!bgColor || !textColor) return '--'
    return bgColor.contrast(textColor).toFixed(2)
  }, [bgColor, textColor])

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
      <div className="flex flex-wrap gap-8">
        <div
          style={{height: stickOutHeight * colors.length, position: 'relative'}}
          className="basis-96 grow-[3]"
        >
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
        <div className="self-end grow basis-24 text-left flex flex-col gap-4">
          Example Text:
          <Demo className="p-8 text-xl" bgColorStr={bgColorStr} textColorStr={textColorStr}>
            Hello World
          </Demo>
        </div>
      </div>

      <div className="flex flex-wrap gap-8">
        <div className="p-8 mt-16 border-2 border-green-400 inline-flex flex-col items-center self-center">
          <div className="text-lg">Contrast Ratio</div>
          <div className="text-3xl">{contrast} : 1</div>
        </div>
        <div className="text-left py-8">
          <h2 className="text-3xl text-tprimary block border-b border-tprimary mt-4 mb-2">
            Normal Text
          </h2>
          <div className="flex gap-8">
            <div>
              <div>WCAG AA: Pass</div>
              <div>WCAG AAA:Pass</div>
            </div>
            <Demo bgColorStr={bgColorStr} textColorStr={textColorStr} />
          </div>
          <h2 className="text-3xl text-tprimary block border-b border-tprimary mt-4 mb-2">
            Large Text
          </h2>
          WCAG AA:Pass WCAG AAA:Pass The five boxing wizards jump quickly.
          <h2 className="text-3xl text-tprimary block border-b border-tprimary mt-4 mb-2">
            Graphical Objects and User Interface Components
          </h2>
          WCAG AA:
        </div>
      </div>
      {/* <div
        className="h-[200px] w-full"
        style={{
          backgroundColor: textColor,
          color: safeParseColor(textColor)?.isDark() ? 'white' : 'black',
        }}
      >
        <h2>Composite Color {textColor}</h2>
      </div> */}
    </div>
  )
}

function Demo(props: React.ComponentProps<'div'> & {bgColorStr: string; textColorStr: string}) {
  const {bgColorStr, textColorStr, className, children, ...rest} = props
  return (
    <div
      {...rest}
      className={twMerge('border border-black/20 p-4 text-center', className)}
      style={{backgroundColor: bgColorStr, color: textColorStr}}
    >
      {children || 'The five boxing wizards jump quickly.'}
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
      <p className="text-xs absolute left-4 top-2" style={{color: accentColor}}>
        {index === length - 1 ? 'Text Color' : 'Background Color ' + (index + 1)}
      </p>

      <input
        type="text"
        value={color}
        onChange={(e) => onColorChange(index, e.target.value)}
        className="bg-white/60 text-slate-800"
      />

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
      r: r * alpha + bgR * (1 - alpha),
      g: g * alpha + bgG * (1 - alpha),
      b: b * alpha + bgB * (1 - alpha),
      alpha: alpha + bgAlpha * (1 - alpha),
    }
  })

  return safeParseColor(compositeColor)
}
