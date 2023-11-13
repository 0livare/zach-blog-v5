import Color from 'color'

const minContrastRatios = {
  normal: {
    aa: 4.5,
    aaa: 7,
  },
  large: {
    aa: 3,
    aaa: 4.5,
  },
  icons: {
    aa: 3,
  },
}

const hardestTest = Math.max(
  minContrastRatios.normal.aa,
  minContrastRatios.normal.aaa,
  minContrastRatios.large.aa,
  minContrastRatios.large.aaa,
  minContrastRatios.icons.aa,
)

export function testContrast(contrastRatio: number) {
  return {
    allPassed: contrastRatio >= hardestTest,
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

export function randomColor() {
  if (Math.random() < 0.5) {
    return randomHslColor()
  } else {
    return randomRgbColor()
  }
}

function randomRgbColor() {
  let color: Color | null = null
  while (!color) {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const a = Math.floor((Math.random() + 0.3) * 10) / 10
    color = safeParseColor(`rgba(${r}, ${g}, ${b}, ${a})`)
  }
  return color.rgb().toString()
}

function randomHslColor() {
  let color: Color | null = null
  while (!color) {
    const h = Math.floor(Math.random() * 360)
    const s = Math.floor(Math.random() * 100)
    const l = Math.floor(Math.random() * 100)
    const a = Math.floor((Math.random() + 0.3) * 10) / 10
    color = safeParseColor(`hsl(${h}, ${s}%, ${l}%, ${a})`)
  }
  return color.hsl().toString()
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

  if (!rgbas.length) return null

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
