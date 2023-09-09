import {round} from './math-util'

// prettier-ignore
const unitScales = [
  {unit: 'tsp', cups: 1 / 48, max: 3,                        min: 0.25, displayRoundTo: 0.25, mathRoundTo: 0.1},
  {unit: 'tbs', cups: 1 / 16, max: 3,                        min: 1,    displayRoundTo: 0.5,  mathRoundTo: 0.1},
  {unit: 'cups', cups: 1,      max: Number.POSITIVE_INFINITY, min: 0.2,  displayRoundTo: 0.25, mathRoundTo: 0.1},
]

export function convertToAppropriateUnit(
  args: {amount: number; unit: string | undefined},
  depth = 1,
): {
  amount: number
  unit: string | undefined
} {
  let {amount, unit} = args

  let currentSizeIndex = unitScales.findIndex((scale) => scale.unit === unit)
  let unitScale = unitScales[currentSizeIndex]

  // Unsupported unit
  if (!unitScale || depth > 5) return args

  // This is weird, but we need to do two different levels of rounding here
  //  - e.g. 0.125 cups is 2 tbs - we do not want to round 0.125 cups up to
  //    0.25 cups, because that is literally doubling the amount
  // - But if I have 0.95 cups, I do want to round up to 1 cup
  // - So use one rounding for the math portion and a different rounding for display

  let displayRoundedAmount = round(amount).to(unitScale.displayRoundTo)
  let roundedInput = {amount: displayRoundedAmount, unit}

  let mathRoundedAmount = round(amount).to(unitScale.mathRoundTo)
  let roundedPctChange = (mathRoundedAmount - amount) / amount
  if (roundedPctChange > 0.1) {
    // Fuck the rounding, it's changing the value too much
    mathRoundedAmount = amount
  }

  let unitIsTooSmall = mathRoundedAmount > unitScale.max
  let unitIsTooLarge = mathRoundedAmount < unitScale.min
  let unitIsAppropriate = !unitIsTooSmall && !unitIsTooLarge

  if (!unit || unitIsAppropriate) return roundedInput

  if (unitIsTooSmall) {
    let largerUnitExists = currentSizeIndex < unitScales.length - 1
    if (!largerUnitExists) return roundedInput

    let scaledUp = scaleUnit({amount, unit, scale: 'up'})
    if (scaledUp.unit === unit) return roundedInput
    return convertToAppropriateUnit(scaledUp, depth + 1)
  }

  // Unit is too large
  let smallerUnitExists = currentSizeIndex > 0
  if (!smallerUnitExists) return roundedInput

  let scaledDown = scaleUnit({amount, unit, scale: 'down'})
  if (scaledDown.unit === unit) return roundedInput
  return convertToAppropriateUnit(scaledDown, depth + 1)
}

function scaleUnit(args: {amount: number; unit: string | undefined; scale: 'up' | 'down'}) {
  let {amount, unit, scale} = args

  let currentSizeIndex = unitScales.findIndex((scale) => scale.unit === unit)
  if (currentSizeIndex < 0) return {amount, unit}

  let unitScale = unitScales[currentSizeIndex]
  let nextSizeIndex = scale === 'up' ? currentSizeIndex + 1 : currentSizeIndex - 1
  let nextUnitScale = unitScales[nextSizeIndex]

  let amountInCups = amount * unitScale.cups
  let amountInNextUnit = amountInCups / nextUnitScale.cups
  let nextUnit = nextUnitScale.unit

  return {amount: amountInNextUnit, unit: nextUnit}
}

export function roundForDisplay(args: {amount: number; unit: string | undefined}) {
  const {amount, unit} = args

  let roundTo =
    unit === 'g'
      ? amount > 10
        ? 1
        : 0.1
      : unitScales.find((scale) => scale.unit === unit)?.displayRoundTo || 0.25

  return round(amount).to(roundTo)
}
