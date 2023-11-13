import React from 'react'
import {calculateImageComposite, randomColor, testContrast} from './helpers'
import {Layer, useStickOutSize} from './layer'
import {Demo} from './demo'
import {ContrastTextType} from './contrast-text-type'
import {Icon} from '~/components'
import {ContrastRatio} from './contrast-ratio'

export function ColorContrastAccessibilityChecker(props: React.ComponentProps<'div'>) {
  const [colors, setColors] = React.useState(['#fff', 'rgb(0, 0, 0, 0.8)'])
  const bgColor = React.useMemo(() => calculateImageComposite(colors.slice(0, -1)), [colors])
  const textColor = React.useMemo(() => calculateImageComposite(colors), [colors])
  const bgColorStr = bgColor?.rgb().string()
  const textColorStr = textColor?.rgb().string()
  const contrast = React.useMemo(() => {
    if (!bgColor || !textColor) return Number.NaN
    return bgColor.contrast(textColor)
  }, [bgColor, textColor])
  const testResults = testContrast(contrast)
  const stickOutSize = useStickOutSize()

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
          style={{height: stickOutSize * colors.length, position: 'relative'}}
          className="basis-[700px] grow-[3]"
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
        <ContrastRatio contrast={contrast} pass={testResults.allPassed} />

        <div className="text-left py-8">
          <ContrastTextType title="Normal" aa={testResults.normal.aa} aaa={testResults.normal.aaa}>
            <Demo bgColorStr={bgColorStr} textColorStr={textColorStr} className="text-base" />
          </ContrastTextType>

          <ContrastTextType
            title="Large Text"
            aa={testResults.large.aa}
            aaa={testResults.large.aaa}
          >
            <Demo bgColorStr={bgColorStr} textColorStr={textColorStr} className="flex-col">
              <p className="text-lg font-bold">The five boxing wizards jump quickly.</p>
              <p className="text-2xl">The five boxing wizards jump quickly.</p>
            </Demo>
          </ContrastTextType>

          <ContrastTextType
            title="Graphical Objects and User Interface Components"
            aa={testResults.icons.aa}
          >
            <Demo bgColorStr={bgColorStr} textColorStr={textColorStr}>
              <div className="flex gap-8 items-center">
                <Icon name="Check" color="current" />
                <input
                  type="text"
                  defaultValue="Text Input"
                  style={{border: textColorStr}}
                  className="border border-solid p-1 text-black"
                />
              </div>
            </Demo>
          </ContrastTextType>
        </div>
      </div>

      <div className="text-wrapper pb-32">
        <p>
          WCAG 2.0 level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for
          large text. WCAG 2.1 requires a contrast ratio of at least 3:1 for graphics and user
          interface components (such as form input borders). WCAG Level AAA requires a contrast
          ratio of at least 7:1 for normal text and 4.5:1 for large text.
        </p>
        <p>
          Large text is defined as 14 point (typically 18.66px) and bold or larger, or 18 point
          (typically 24px) or larger.
        </p>
      </div>
    </div>
  )
}
