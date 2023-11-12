import React from 'react'
import Color from 'color'
import {twMerge} from 'tailwind-merge'
import {calculateImageComposite, randomColor, safeParseColor, testContrast} from './helpers'
import {Layer, STICK_OUT_HEIGHT} from './layer'
import {Demo} from './demo'
import {ContrastTextType} from './contrast-text-type'
import {Icon} from '~/components'
import {ContrastRatio} from './contrast-ratio'

export function ColorContrastAccessibilityChecker(props: React.ComponentProps<'div'>) {
  const [colors, setColors] = React.useState(['#fff', 'rgb(0, 0, 0, 0.5)'])
  const bgColor = React.useMemo(() => calculateImageComposite(colors.slice(0, -1)), [colors])
  const textColor = React.useMemo(() => calculateImageComposite(colors), [colors])
  const bgColorStr = bgColor?.rgb().string()
  const textColorStr = textColor?.rgb().string()
  const contrast = React.useMemo(() => {
    if (!bgColor || !textColor) return Number.NaN
    return bgColor.contrast(textColor)
  }, [bgColor, textColor])
  const testResults = testContrast(contrast)

  function handleAddLayer() {
    setColors((prev) => [...prev, `${randomColor()}`])
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
          style={{height: STICK_OUT_HEIGHT * colors.length, position: 'relative'}}
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

      <div className="flex flex-wrap gap-8 pb-32">
        <ContrastRatio contrast={contrast} pass={!testResults.allFailed} />

        <div className="text-left py-8">
          <ContrastTextType title="Normal" aa={testResults.normal.aa} aaa={testResults.normal.aaa}>
            <Demo bgColorStr={bgColorStr} textColorStr={textColorStr} className="text-base" />
          </ContrastTextType>

          <ContrastTextType
            title="Large Text"
            aa={testResults.large.aa}
            aaa={testResults.large.aaa}
          >
            <Demo
              bgColorStr={bgColorStr}
              textColorStr={textColorStr}
              className="text-lg font-bold"
            />
          </ContrastTextType>

          <ContrastTextType
            title="Graphical Objects and User Interface Components"
            aa={testResults.icons.aa}
          >
            <Demo bgColorStr={bgColorStr} textColorStr={textColorStr}>
              <div className="flex gap-8">
                <input type="checkbox" />
                <Icon name="Check" color="current" />
              </div>
            </Demo>
          </ContrastTextType>
        </div>
      </div>
    </div>
  )
}
