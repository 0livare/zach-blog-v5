import Color from 'color'

const minContrastRatios = {
  normal: {
    aa: 2.5,
    aaa: 3,
  },
  large: {
    aa: 2.1,
    aaa: 2.5,
  },
  icons: {
    aa: 2.6,
  },
}

const easiestTest = Math.min(
  minContrastRatios.normal.aa,
  minContrastRatios.normal.aaa,
  minContrastRatios.large.aa,
  minContrastRatios.large.aaa,
  minContrastRatios.icons.aa,
)

export function testContrast(contrastRatio: number) {
  return {
    allFailed: contrastRatio < easiestTest,
    normal: {
      aa: contrastRatio >= minContrastRatios.normal.aa,
      aaa: contrastRatio >= minContrastRatios.normal.aaa,
    },
    large: {
      aa: contrastRatio >= minContrastRatios.large.aa,
      aaa: contrastRatio >= minContrastRatios.large.aaa,
    },
    icons: {
      aa: contrastRatio >= minContrastRatios.icons.aa,
    },
  }
}

export function safeParseColor(color: Parameters<typeof Color>[0]) {
  try {
    return Color(color)
  } catch {
    return null
  }
}

const MAX_COLOR = Number('0xffffffff')
export function randomColor() {
  let color: Color | null = null
  while (!color) {
    const hexValue = Math.floor(Math.random() * MAX_COLOR).toString(16)
    color = safeParseColor('#' + hexValue)
  }
  return color.rgb().toString()
}

type RGBObj = {r: number; g: number; b: number; alpha: number}

/**
 * Using the Alpha compositing "over" method with premultiplied alpha
 * See: https://en.wikipedia.org/wiki/Alpha_compositing
 */
export function calculateImageComposite(colors: string[]) {
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
